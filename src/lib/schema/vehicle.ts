import { pgTable , serial , varchar , timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const vehicles = pgTable("vehicles", {
    id: serial("id").primaryKey(),
    label: varchar("label").notNull(),
    immatriculation: varchar("immatriculation").unique().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
  });

export type NewVehicles = InferInsertModel<typeof vehicles>;
export type Vehicles = InferSelectModel<typeof vehicles>;
  