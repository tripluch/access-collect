import { pgTable , serial , varchar , timestamp, integer, decimal } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";



export const collectedData = pgTable("collectedData", {
    id: serial("id").primaryKey(),
    quantity: integer("quantity"),
    weight: decimal("weight"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
})

export type NewCollectedData = InferInsertModel<typeof collectedData>;
export type CollectedData = InferSelectModel<typeof collectedData>;