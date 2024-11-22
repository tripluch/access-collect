"use server";
import "@/lib/config";
import { user, organisation, User, Organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Bcrypt from "bcryptjs";

import { signIn } from "next-auth/react";

export const hashPassword = async (text: string) => {
  try {
    const salt = await Bcrypt.genSalt(10);
    const hash = await Bcrypt.hash(text, salt);

    return hash;
  } catch (error: any) {
    console.log(error.message);
  }
};

// export const comparePassword = async (password: string, passwordDB: string) => {
//   try {
//     const compare = await Bcrypt.compare(password, passwordDB);

//     return compare as boolean;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

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
  const { name, email, password, phone, role, organisationId } =
    Object.fromEntries(formData);

  const newPassword = await hashPassword(password);

  try {
    await db
      .insert(user)
      .values({
        name: name,
        email: email,
        password: newPassword as string,
        phone: phone,
        role: role,
        organisationId: organisationId,
      })
      .returning();

    revalidatePath("/dashboard/user");
  } catch (error) {
    console.error(error);
  }
};

// export const logIn = async (formData: any) => {
//   const { email, password } = Object.fromEntries(formData);

//   const getUser = await db.select().from(user).where(eq(email, user.email));
//   const passwordDB = getUser[0].password;
//   const check = await comparePassword(password, passwordDB);

//   if (check === true) {
//     //SESSION
//   } else {
//     //ERREUR
//   }
// };
