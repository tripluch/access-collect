"use server";
import "@/lib/config";
import { user, organisation, User, Organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Bcrypt from "bcryptjs";
import { replaceEmptyValueByNull } from "./utils";
import nodemailer from "nodemailer";

export const hashPassword = async (text: string) => {
  try {
    const salt = await Bcrypt.genSalt(10);
    const hash = await Bcrypt.hash(text, salt);

    return hash;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getUsers = async () => {
  const selectResult = await db.select().from(user);

  return selectResult as User[];
};

interface UserWithOrganisation {
  organisation: Organisation | null;
  user: User;
}

export const getUsersWithOrganisationName = async () => {
  const selectResult = await db
    .select()
    .from(user)
    .leftJoin(organisation, eq(user.organisationId, organisation.id));

  return selectResult as UserWithOrganisation[];
};

export const addUser = async (formData: any) => {
  const data = await replaceEmptyValueByNull(formData);

  const newPassword = await hashPassword(data.password);

  try {
    await db
      .insert(user)
      .values({
        name: data.name,
        email: data.email,
        password: newPassword as string,
        phone: data.phone,
        role: data.role,
        organisationId: data.organisationId,
      })
      .returning();

    revalidatePath("/dashboard/user");
  } catch (error) {
    console.error(error);
  }
};

export const getUserDataWithEmail = async (email: string) => {
  const user = await db.query.user.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  });
  return user as User;
};

export const creationOfTransporter = async () => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: { rejectedUnauthorized: false },
  });
  return transporter;
};

export const sendResetPasswordEmailIfUserExists = async (formData: any) => {
  const userEmail = Object.fromEntries(formData);
  const user = await getUserDataWithEmail(userEmail.email);

  if (!user) {
    console.log("error email doesn't exists on database");
  } else {
    const info = await creationOfTransporter();
    try {
      info.sendMail({
        from: '"access-collect" <contact@tripluch.fr>',
        to: "ileana.bolas.16@gmail.com",
        subject: "Réinitialisation de votre mot de passe",
        html: "<h3>Bonjour,</h3><p>Vous recevez ce mail car nous avons reçu une demande de réinitialisation du mot de passe pour votre compte.</p>",
      });
      console.log("Message sent to user");
    } catch {
      console.error("Message not sent to user");
    }
  }
};
