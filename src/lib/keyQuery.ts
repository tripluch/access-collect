import { revalidatePath } from "next/cache";
import { db } from "./drizzle";
import { Key, key } from "./schema/key";


export const addKey = async (userId: any) => {
  const date = new Date();
  date.setHours(date.getHours()+1)
  try {
    await db
      .insert(key)
      .values({
        userId: userId,
        expirationDate: date,
      })
      .returning();

    revalidatePath("/forgotten-password");
  } catch (error) {
    console.error(error);
  }
};

export const getKeyByUserId = async (idUser: any) => {
  const key = await db.query.key.findFirst({
    where: (key, { eq }) => eq(key.userId, idUser),
  });
  return key as Key;
};
