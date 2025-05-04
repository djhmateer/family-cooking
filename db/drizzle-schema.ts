// ./db/drizzle-schema.ts

// npx drizzle-kit push
// npx drizzle-kit generate
// npx drizzle-kit migrate

import {
  pgTable,
  varchar,
  text,
  integer,
  decimal,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  images: jsonb("images"), // Store array of image paths as JSON
  brand: varchar("brand", { length: 255 }).notNull(),
  description: text("description").notNull(),
  stock: integer("stock").notNull(),
  // numeric type in postgres
  price: decimal("price", { precision: 12, scale: 2 }).notNull().default("0"),
  rating: decimal("rating", { precision: 3, scale: 2 }).notNull().default("0"),
  numReviews: integer("num_reviews").notNull().default(0),
  isFeatured: boolean("is_featured").notNull().default(false),
  banner: varchar("banner", { length: 255 }),
  createdAt: timestamp("created_at", { precision: 6 }).defaultNow().notNull(),
});
