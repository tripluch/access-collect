import "@/lib/config";
import { NewUser, user, NewOrganisation, organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";

export const getUsers = async () => {
  const selectResult = await db.select().from(user);

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

  return selectResult;
};

export const getUsersWithOrganisationName = async () => {
  const selectResult = await db
    .select()
    .from(user)
    .leftJoin(organisation, eq(user.organisationId, organisation.id));
  console.log("Result", selectResult);
  return selectResult;
};
