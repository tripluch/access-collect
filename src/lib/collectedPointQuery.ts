"use server";

import "@/lib/config";
import {
  CollectPoint,
  collectPoint,
  Organisation,
  user,
  User,
} from "./schema/schema";
import { db } from "./drizzle";
import { eq, inArray } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getCollectedPoints = async () => {
  const selectResult = await db.select().from(collectPoint);
  return selectResult as CollectPoint[];
};

export const addCollectedPoint = async (formData: any) => {
  const { name, address, daysOfCollect, clientId, organisationId } =
    Object.fromEntries(formData);
  try {
    await db
      .insert(collectPoint)
      .values({
        name: name,
        address: address,
        daysOfCollect: daysOfCollect,
        clientId: clientId,
        organisationId: organisationId,
      })
      .returning();
    revalidatePath("dashboard/add-collected-point");
  } catch {
    console.error("the collected point has not been added to the database");
  }
};

export const getClientsFromOrganisation = async (props: string) => {
  try {
    const selectResult = await db
      .select()
      .from(user)
      .where(eq(user.organisationId, props));
    console.log(selectResult);

    return selectResult as User[];
  } catch {
    console.error("this organisation hasn't got a client");
  }
};
