"use server";
import "@/lib/config";
import { user, organisation, User, Organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Bcrypt from "bcryptjs";
import { creationOfTransporter, replaceEmptyValueByNull, sendMailToUser } from "./utils";
import { addKey, getKeyByUserId } from "./keyQuery";
import { Key } from "react";

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
  console.log(user)
  return user as User;
};

export const sendResetPasswordEmailIfUserExists = async (formData: any) => {
  const userEmail = Object.fromEntries(formData);
  const user = await getUserDataWithEmail(userEmail.email);

  if (!user) {
    console.log("error email doesn't exists on database");
  } else {
    addKey(user.id)
    const userKey = await getKeyByUserId(user.id)
    const info : any = await creationOfTransporter();
    const url : string = "http://localhost:3000/reset-password/"+userKey.id
    sendMailToUser(url, info);
  }
};
