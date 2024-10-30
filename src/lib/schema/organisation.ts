import { pgTable , serial , varchar , timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations} from "drizzle-orm";
import { collectPoint } from "./collectPoint";
import { user } from "./users";
import { vehicle } from "./vehicle";

export const organisation = pgTable("organisation", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    address: varchar("address").notNull(),
    phoneNumber: varchar("phoneNumber").notNull(),
    contact: varchar("contact").notNull(),
    agrementNumber: varchar("agrementNumer").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow()
})

export const organisationRelations = relations(organisation, ({ many }) => ({
    collectPoint: many(collectPoint),
    user: many(user),
    vehicle: many(vehicle)
  }));

export type NewOrganisation = InferInsertModel<typeof organisation>;
export type Organisation = InferSelectModel<typeof organisation>;

