import {
  pgEnum,
  pgTable,
  text,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { user } from "./user";
import { organisation } from "./organisation";
import { collectedData } from "./collectedData";

export const daysEnum = pgEnum("daysOfCollect", [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
]);

export const collectPoint = pgTable("collectPoint", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name").notNull(),
  address: varchar("adress").notNull(),
  daysOfCollect: daysEnum().notNull(),
  clientId: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  organisationId: text("organisationId")
    .references(() => organisation.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const collectPointRelations = relations(
  collectPoint,
  ({ one, many }) => ({
    client: one(user, {
      fields: [collectPoint.clientId],
      references: [user.id],
    }),
    organisation: one(organisation, {
      fields: [collectPoint.organisationId],
      references: [organisation.id],
    }),
    collectedData: many(collectedData),
  }),
);

export type NewCollectPoint = InferInsertModel<typeof collectPoint>;
export type CollectPoint = InferSelectModel<typeof collectPoint>;
