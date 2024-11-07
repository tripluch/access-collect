import "@/lib/config";
import { NewUser, user, NewOrganisation, organisation } from "./schema/schema";
import { db } from "./drizzle";

export const getUsers = async () => {
  const selectResult = await db.select().from(user);
  console.log("Results", selectResult);
  return selectResult;
};

export const insertUser = async (newUser: NewUser) => {
  return db.insert(user).values(newUser).returning();
};

export const getUsers2 = async () => {
  const result = await db.query.user.findMany();
  return result;
};

export const getOrganisation = async () => {
  const selectResult = await db.select().from(organisation);
  console.log("Result", selectResult);
  return selectResult;
};
