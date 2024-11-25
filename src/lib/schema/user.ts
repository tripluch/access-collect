import { pgEnum, pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { collectPoint } from "./collectPoint";
import { organisation } from "./organisation";

export const rolesEnum = pgEnum("role", [
  "superAdmin",
  "admin",
  "client",
  "collector",
]);

export const user = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name").notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  role: rolesEnum().notNull(),
  phone: varchar("phone"),
  organisationId: text("organisationId")
    .references(() => organisation.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const usersRelations = relations(user, ({ many, one }) => ({
  collectPoint: many(collectPoint),

  organisation: one(organisation, {
    fields: [user.organisationId],
    references: [organisation.id],
  }),
}));

export type NewUser = InferInsertModel<typeof user>;
export type User = InferSelectModel<typeof user>;
