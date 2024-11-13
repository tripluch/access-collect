import "@/lib/config";
import { CollectPoint, collectPoint } from "./schema/schema";
import { db } from "./drizzle";

export const getCollectedPoints = async () => {
  const selectResult = await db.select().from(collectPoint);
  return selectResult as CollectPoint[];
};

export const addCollectedPoint = async () => {
  await db.insert(collectPoint).values({
    name: "point test 5",
    address: "rue domer 69006 lyon",
    daysOfCollect: "wednesday",
    clientId: "4dc0ad13-8d3a-4b79-b05c-9fdafa701b55",
    organisationId: "4886b539-35a0-40c1-90eb-82622056b9f0"

  })
}
