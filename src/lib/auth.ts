import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  }),

  trustedOrigins: [
    "http://localhost:3000",
    "https://suncart-shop.vercel.app",
  ],

  emailAndPassword: {
    enabled: true,
  },
});