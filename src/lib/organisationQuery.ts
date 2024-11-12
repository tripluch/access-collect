import "@/lib/config";
import { organisation } from "./schema/schema";
import { db } from "./drizzle";
import { revalidatePath } from "next/cache";

export const getOrganisation = async () => {
    const selectResult = await db.select().from(organisation);
  
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
  
      revalidatePath("/dashboard/organisation");
    } catch {
      console.error("the organisation has not been added to the database");
    }
};

