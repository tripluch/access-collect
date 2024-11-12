"use server";
import "@/lib/config";
import { user, organisation } from "./schema/schema";
import { db } from "./drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";


export const hashPassword = async (text: String) => {
    const bcrypt = require('bcrypt');
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(text, salt)
        
        return hash
    
    }catch(error:any){
        console.log(error.message)

    }

}

export const getUsers = async () => {
    const selectResult = await db.select().from(user);
  
    return selectResult;
  };

export const getUsersWithOrganisationName = async () => {
    const selectResult = await db
      .select()
      .from(user)
      .leftJoin(organisation, eq(user.organisationId, organisation.id));
  
    return selectResult;
  };

export const addUser = async (formData: any) => {
    
    const { name, email, password, phone, role, organisationId } =
      Object.fromEntries(formData);

    const newPassword = await hashPassword(password)
    console.log(newPassword)

    try {
        await db
      .insert(user)
      .values({
        name: name,
        email: email,
        password: newPassword,
        phone: phone,
        role: role,
        organisationId: organisationId,
      }).returning();

      revalidatePath("/dashboard/user");
    }catch{
        console.error("the user has not been added to the database")
    }

};

