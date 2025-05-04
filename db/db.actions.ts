// db/product.actions.ts
"use server";

import { productsTable } from "./drizzle-schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { desc } from "drizzle-orm";
// import all tables needed for Object Based Syntax
import * as schema from "./drizzle-schema";

export async function getLatestProducts() {

  // Query builder syntax
  //   const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!);
  //   const products = await db
  //     .select()
  //     .from(productsTable)
  //     .orderBy(desc(productsTable.createdAt))
  //     .limit(3);

  // Object Based Syntax which is more type safe
  const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!, { schema });
  const products = await db.query.productsTable.findMany({
    orderBy: [desc(productsTable.createdAt)],
    limit: 5,

  });
  return products;
}
