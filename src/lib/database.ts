import "@/lib/config";
import { NewUser, user, organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const insertUser = async (newUser: NewUser) => {
  return db.insert(user).values(newUser).returning();
};

export const getUsers2 = async () => {
  const result = await db.query.user.findMany();
  return result;
};






