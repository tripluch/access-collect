import { pgEnum, pgTable , serial , varchar , timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const rolesEnum = pgEnum("role", ["superAdmin", "admin", "client", "collector"])

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  role: rolesEnum().notNull(),
  clientPhone: varchar("clientPhone"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow()
});

export type NewUser = InferInsertModel<typeof user>;
export type User = InferSelectModel<typeof user>;
