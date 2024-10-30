import { pgTable , serial , varchar , timestamp , integer } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { organisation } from "./organisation";

export const vehicle = pgTable("vehicles", {
    id: serial("id").primaryKey(),
    label: varchar("label").notNull(),
    immatriculation: varchar("immatriculation").unique().notNull(),
    organisationId: integer("organisationId"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
  });

export const vehiclesRelations = relations(vehicle, ({ one }) => ({
  organisation: one(organisation, {
    fields: [vehicle.organisationId],
    references: [organisation.id]
  })
}));

export type NewVehicles = InferInsertModel<typeof vehicle>;
export type Vehicles = InferSelectModel<typeof vehicle>;
  