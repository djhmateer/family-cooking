// db/seed-simple.ts
// To run this console script
// npx tsx db/console-seed

import "dotenv/config";
import postgres from "postgres";
import sampleData from "./traversy-sample-data";

const client = postgres(process.env.POSTGRES_URL_NON_POOLING!);

async function seedProducts() {
  await client`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  for (const product of sampleData.products) {
    console.log("inserting product", product.name);
    await client`
      INSERT INTO products (name, image_url)
      VALUES (${product.name}, ${product.images[0]});
    `;
  }
}

async function main() {
  console.log("dropping and creating public schema");
  await client`DROP SCHEMA public CASCADE;`;
  await client`CREATE SCHEMA public;`;

  console.log("begin transaction");
  try {
    await seedProducts();
  } catch (error) {
    console.error("error", error);
  }
  console.log("end transaction");
  // close the connection so that the console app can exit
  await client.end();
}

main();
