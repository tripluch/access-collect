import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";

export const key = pgTable("key", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const keysRelations = relations(key, ({ one }) => ({
  user: one(user, {
    fields: [key.userId],
    references: [user.id],
  }),
}));

export type NewKey = InferInsertModel<typeof key>;
export type Key = InferSelectModel<typeof key>;
