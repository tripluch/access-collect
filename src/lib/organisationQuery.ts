"use server";
import "@/lib/config";
import { Organisation, organisation } from "./schema/schema";
import { db } from "./drizzle";
import { revalidatePath } from "next/cache";
import { replaceEmptyValueByNull } from "./utils";

export const getOrganisations = async () => {
  const selectResult = await db.select().from(organisation);

  return selectResult as Organisation[];
};

export const addOrganisation = async (formData: any) => {
  const data = await replaceEmptyValueByNull(formData);

  try {
    await db
      .insert(organisation)
      .values({
        name: data.name,
        address: data.address,
        phoneNumber: data.phone,
        contact: data.contact,
        agrementNumber: data.agrement,
      })
      .returning();

    revalidatePath("/dashboard/organisation");
  } catch {
    console.error("the organisation has not been added to the database");
  }
};
