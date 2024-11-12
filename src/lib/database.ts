import "@/lib/config";
import { NewUser, user, organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

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

  return selectResult;
};

export const addOrganisation = async (formData: any) => {
  "use server";
  const { name, address, phone, contact, agrement } =
    Object.fromEntries(formData);

  try{
    await db
    .insert(organisation)
    .values({
      name: name,
      address: address,
      phoneNumber: phone,
      contact: contact,
      agrementNumber: agrement,
    }).returning();

    revalidatePath("/dashboard/userOrganisation");
  } catch {
    console.error("the organisation has not been added to the database");
  }
};
