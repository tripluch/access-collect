import { pgTable , serial , varchar , timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const waste = pgTable("waste", {
    id: serial("id").primaryKey(),
    type: varchar("type").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
  });

export type NewWaste = InferInsertModel<typeof waste>;
export type Waste = InferSelectModel<typeof waste>;