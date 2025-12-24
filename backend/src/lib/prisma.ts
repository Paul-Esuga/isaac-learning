import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

// 1. Create a connection pool using the native 'pg' driver
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// 2. Initialize the Prisma adapter for PostgreSQL
const adapter = new PrismaPg(pool);

// 3. Pass the adapter to the PrismaClient constructor
const prisma = new PrismaClient({ adapter });

export default prisma;
