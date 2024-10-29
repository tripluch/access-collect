import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "../drizzle";

async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
}

main();
