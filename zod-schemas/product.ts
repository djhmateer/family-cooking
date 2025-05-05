// zod-schemas/product.ts

import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { productsTable } from "@/db/drizzle-schema";

// don't need some fields for insert new product
// eg createdAt, updatedAt, id, rating...
// so a separate schema for insert
export const insertProductSchema = createInsertSchema(productsTable, {
  name: (s) => s.min(3, "Name of product at least 3 characters"),
  slug: (s) => s.min(3, "Slug of product at least 3 characters"),
  category: (s) => s.min(3, "Category of product at least 3 characters"),
  // TODO test
  // images is an array of strings, stored as jsonb in db
  images: (s) => s.array().nonempty("At least 1 image is required"),
  brand: (s) => s.min(3, "Brand of product at least 3 characters"),
  description: (s) => s.min(10, "Description at least 10 characters"),
  // TODO test
  stock: (s) => s.min(0, "Stock of product greater than 0..test this!"),
  price: (s) => s.min(0, "Price of product greater than 0...test this!"),
  // no need for rating
  // no need for numReviews
  // no need for isFeatured
  // no need for banner
  // no need for createdAt (auto generated)
});

// createSelectSchema(productsTable) automatically generates a Zod schema
// that matches the shape of a row selected from the productsTable in your database.
export const selectProductSchema = createSelectSchema(productsTable);



export type insertProductSchemaType = typeof insertProductSchema._type;

export type selectProductSchemaType = typeof selectProductSchema._type;
