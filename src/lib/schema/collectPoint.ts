import { pgEnum, pgTable , serial , varchar , timestamp, integer } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { user } from "./users";
import { organisation } from "./organisation"; 



export const daysEnum = pgEnum("daysOfCollect", ["monday", "tuesday", "wednesday", "thursday", "friday"])

export const collectPoint = pgTable("collectPoint", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    address: varchar("adress").notNull(),
    daysOfCollect: daysEnum().notNull(),
    clientId: integer("user_id"),
    organisationId: integer("organisationId"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
})

export const collectPointRelations = relations(collectPoint, ({ one }) => ({
    client: one(user, {
        fields: [collectPoint.clientId],
        references: [user.id],
    }),
    organisation: one(organisation, {
        fields: [collectPoint.organisationId],
        references: [organisation.id]
    })
  }));

export type NewCollectPoint = InferInsertModel<typeof collectPoint>;
export type CollectPoint = InferSelectModel<typeof collectPoint>;

