// ./db/drizzle-schema.ts
// import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

// export const usersTable = pgTable("users", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
//   age: integer().notNull(),
//   email: varchar({ length: 255 }).notNull().unique(),

// });


import {
  pgTable,
  varchar,
  text,
  integer,
  decimal,
  boolean,
  timestamp,
  uniqueIndex,
  jsonb,
  serial,
} from "drizzle-orm/pg-core";

// import { pgArray } from "drizzle-orm/pg-core/array";

export const productsTable = pgTable("products",
  {
    // id: uuid("id").defaultRandom() .primaryKey(),
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    category: varchar("category", { length: 255 }).notNull(),
    // images: pgArray(text()).notNull(), // PostgreSQL `text[]`
    images: jsonb('images'), // Store array of image paths as JSON
    brand: varchar("brand", { length: 255 }).notNull(),
    description: text("description").notNull(),
    stock: integer("stock").notNull(),
    price: decimal("price", { precision: 12, scale: 2 }).notNull().default("0"),
    rating: decimal("rating", { precision: 3, scale: 2 }).notNull().default("0"),
    numReviews: integer("num_reviews").notNull().default(0),
    isFeatured: boolean("is_featured").notNull().default(false),
    banner: varchar("banner", { length: 255 }),
    createdAt: timestamp("created_at", { precision: 6 }).defaultNow().notNull(),
  }
//   },
//   (table) => ({
//     slugIdx: uniqueIndex("product_slug_idx").on(table.slug),
//   })
);
