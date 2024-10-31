import { NewUser, user } from "../schema/schema";

import users from "../local_data/users.json";
import { db } from "../drizzle";
import { sql } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";

const clear = async () => {
  await db.execute(sql`truncate table "user" restart identity cascade`);
  console.log("Cleared users");
};

const convert = (user: any): Promise<NewUser> => {
  return Promise.resolve({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
    clientPhone: user.clientPhone,
    organisationId: user.organisationId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

const insert = async <T extends Object, TTable extends PgTable>(
  table: TTable,
  data: any[],
  converter: (item: any) => Promise<T | undefined>,
  tableName: string,
) => {
  const items = (await Promise.all(data.map(converter))).filter(
    (item) => item !== undefined,
  ) as T[];
  console.log(items);

  const inserted = await db.insert(table).values(items).returning();
  console.log(`Inserted ${inserted.length} items into table ${tableName}`);
  return inserted;
};

const main = async () => {
  await clear();
  await insert(user, users, convert, "user");
};

main().then(() => {
  console.log("Done");
  process.exit(0);
});
