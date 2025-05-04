// db/seed/console-seed-drizzle.ts

// To run this console script
// npx tsx db/seed/console-seed-drizzle

import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import sampleData from "./traversy-sample-data";
import { productsTable } from "../drizzle-schema";
import * as schema from "../drizzle-schema";
import { desc } from "drizzle-orm";

// const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!);
const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!, { schema });

async function main() {
  await db.insert(productsTable).values({
    name: "Polo Sporting Stretch Shirt",
    slug: "polo-sporting-stretch-shirt",
    category: "Men's Dress Shirts",
    brand: "Polo",
    description: "Classic Polo style with modern comfort",
    images: [
      "/images/sample-products/p1-1.jpg",
      "/images/sample-products/p1-2.jpg",
    ],
    stock: 5,
    price: "59.99",
    rating: "4.5",
    numReviews: 10,
    isFeatured: true,
    banner: "banner-1.jpg",
    // this doesn't get red squiggly but values above does, and foo is in the error
    // foo: "bar",
  });
  console.log("New product created!");

  for (const product of sampleData.products) {
    console.log("inserting product", product.name);

    // useful to use $insertInsert to debug type problems
    const productFoo: typeof productsTable.$inferInsert = {
      name: product.name,
      slug: product.slug,
      category: product.category,
      brand: product.brand,
      description: product.description,
      // an array stored as jsonb in postgres
      images: product.images,
      stock: product.stock,
      // pass to drizzle as string even though it expects a numeric type
      price: String(product.price),
      // minefield, and will probably store prices as pence/cents anyway to avoid this.
      // price: Number(product.price),
      rating: String(product.rating),
      numReviews: product.numReviews,
      isFeatured: product.isFeatured,
      banner: product.banner,
    };

    await db.insert(productsTable).values(productFoo);
  }

  // can I infer the type of a drizzle select?
  // typeof productsTable.$inferSelect | undefined
  const bar = await db.query.productsTable.findFirst({
    orderBy: [desc(productsTable.createdAt)],
  });

  // this is pure dizzle ORM and nothing to do with zod.
  // firstProduct is of type typeof productsTable.$inferSelect or undefined
  // forcing it to be of type typeof productsTable.$inferSelect
  const firstProduct: typeof productsTable.$inferSelect = bar!;
  console.log("firstProduct", firstProduct);
  console.log("firstProduct name", firstProduct.name);

  // update
  // const users = await db.select().from(productsTable);
  // console.log('Getting all users from the database: ', users)

  // await db
  //   .update(usersTable)
  //   .set({
  //     age: 31,
  //   })
  //   .where(eq(usersTable.email, user.email));
  // console.log('User info updated!')
  // await db.delete(usersTable).where(eq(usersTable.email, user.email));
  // console.log('User deleted!')
  // hack to exit the process
  process.exit(0);
}
// note this will hang
// need to do client.end() but this involves getting underlying postgres client
main();
