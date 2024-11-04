import {
  pgTable,
  text,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { collectedData } from "./collectedData";

export const containing = pgTable("containing", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  type: varchar("type").notNull(),
  size: varchar("size").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const containingRelations = relations(containing, ({ many }) => ({
  collectedData: many(collectedData),
}));

export type NewContaining = InferInsertModel<typeof containing>;
export type Containing = InferSelectModel<typeof containing>;
