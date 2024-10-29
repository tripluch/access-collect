import { pgTable , serial , varchar , timestamp, integer } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const containing = pgTable("containing", {
    id: serial("id").primaryKey(),
    type: varchar("type").notNull(),
    size: integer("size").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
  });

export type NewContaining = InferInsertModel<typeof containing>;
export type Containing = InferSelectModel<typeof containing>;