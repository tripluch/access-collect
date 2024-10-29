import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("isAdmin").notNull().default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type NewUser = InferInsertModel<typeof user>;
export type User = InferSelectModel<typeof user>;
