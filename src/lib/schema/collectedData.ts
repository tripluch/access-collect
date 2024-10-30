import {
  pgTable,
  serial,
  timestamp,
  integer,
  decimal,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { waste } from "./waste";
import { containing } from "./containing";
import { collectPoint } from "./collectPoint";

export const collectedData = pgTable("collectedData", {
  id: serial("id").primaryKey(),
  wasteId: integer("wasteId"),
  containingId: integer("containingId"),
  quantity: integer("quantity"),
  weight: decimal("weight"),
  collectPointId: integer("collectPointId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const collectedDataRelations = relations(collectedData, ({ one }) => ({
  waste: one(waste, {
    fields: [collectedData.wasteId],
    references: [waste.id],
  }),
  containing: one(containing, {
    fields: [collectedData.containingId],
    references: [containing.id],
  }),
  collectPoint: one(collectPoint, {
    fields: [collectedData.collectPointId],
    references: [collectPoint.id],
  }),
}));

export type NewCollectedData = InferInsertModel<typeof collectedData>;
export type CollectedData = InferSelectModel<typeof collectedData>;
