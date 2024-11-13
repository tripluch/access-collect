import "@/lib/config";
import { CollectPoint, collectPoint } from "./schema/schema";
import { db } from "./drizzle";

export const getCollectedPoints = async () => {
  const selectResult = await db.select().from(collectPoint);
  return selectResult as CollectPoint[];
};

