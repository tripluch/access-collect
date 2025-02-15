import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { organisation } from "./organisation";
import { collectedData } from "./collectedData";

export const vehicle = pgTable("vehicles", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  label: varchar("label").notNull(),
  registration: varchar("registration").unique().notNull(),
  organisationId: text("organisationId")
    .references(() => organisation.id, { onDelete: "cascade" })
    .notNull(),
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

export type NewVehicle = InferInsertModel<typeof vehicle>;
export type Vehicle = InferSelectModel<typeof vehicle>;
