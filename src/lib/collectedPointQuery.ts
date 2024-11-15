"use server";

import "@/lib/config";
import { CollectPoint, collectPoint } from "./schema/schema";
import { db } from "./drizzle";
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
