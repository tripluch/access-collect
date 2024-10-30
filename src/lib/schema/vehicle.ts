import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { organisation } from "./organisation";
import { collectedData } from "./collectedData";
import { register } from "module";

export const vehicle = pgTable("vehicles", {
  id: serial("id").primaryKey(),
  label: varchar("label").notNull(),
  registration: varchar("registration").unique().notNull(),
  organisationId: integer("organisationId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const vehiclesRelations = relations(vehicle, ({ one, many }) => ({
  organisation: one(organisation, {
    fields: [vehicle.organisationId],
    references: [organisation.id],
  }),
  collectedData: many(collectedData),
}));

export type NewVehicles = InferInsertModel<typeof vehicle>;
export type Vehicles = InferSelectModel<typeof vehicle>;
