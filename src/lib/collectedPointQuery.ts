import "@/lib/config";
import { collectPoint } from "./schema/schema";
import { db } from "./drizzle";

export const getCollectedPoint = async () => {
    const selectResult = await db.select().from(collectPoint);
    console.log("Results", selectResult);
    return selectResult;
};