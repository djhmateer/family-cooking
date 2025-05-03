// ./drizzle.config.ts
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// Used by Drizzle Kit
export default defineConfig({
  schema: "./db/drizzle-schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL_NON_POOLING!,
  },
});