import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { collectedData } from "./collectedData";

export const waste = pgTable("waste", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  type: varchar("type").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const wasteRelations = relations(waste, ({ many }) => ({
  collectedData: many(collectedData),
}));

export type NewWaste = InferInsertModel<typeof waste>;
export type Waste = InferSelectModel<typeof waste>;
