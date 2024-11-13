import "@/lib/config";
import { NewUser, user } from "./schema/schema";
import { db } from "./drizzle";

export const insertUser = async (newUser: NewUser) => {
  return db.insert(user).values(newUser).returning();
};

export const getUsers2 = async () => {
  const result = await db.query.user.findMany();
  return result;
};
