import {
  pgEnum,
  pgTable,
  text,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";
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

// export const account = pgTable("account", {
//   userId: text("userId")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),
//   type: text("type").$type<AdapterAccountType>().notNull(),
//   refresh_token: text("refresh_token"),
//   access_token: text("access_token"),
//   expires_at: integer("expires_at"),
//   token_type: text("token_type"),
//   scope: text("scope"),
//   id_token: text("id_token"),
//   session_state: text("session_state"),
// })

// export const accountRelations = relations(account, ({ one }) => ({
//   user: one(user, {
//     fields : [account.userId],
//     references: [user.id],
//   }),
// }));

// export const session = pgTable("session", {
//   sessionToken: text("sessionToken").primaryKey(),
//   userId: text("userId")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),
//   expires: timestamp("expires", { mode: "date" }).notNull(),
// })

// export const sessionRelations = relations(session, ({ one }) => ({
//   user: one(user, {
//     fields : [session.userId],
//     references: [user.id],
//   }),
// }));

export type NewUser = InferInsertModel<typeof user>;
export type User = InferSelectModel<typeof user>;
