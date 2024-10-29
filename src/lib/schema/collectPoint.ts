import { pgEnum, pgTable , serial , varchar , timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const daysEnum = pgEnum("daysOfCollect", ["monday", "tuesday", "wednesday", "thursday", "friday"])

export const collectPoint = pgTable("collectPoint", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    address: varchar("adress").notNull(),
    daysOfCollect: daysEnum().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
})

export type NewCollectPoint = InferInsertModel<typeof collectPoint>;
export type CollectPoint = InferSelectModel<typeof collectPoint>;

