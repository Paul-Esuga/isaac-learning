import { PrismaClient } from "@prisma/client";

// For Prisma 7, the client automatically looks for prisma.config.ts
export const db = new PrismaClient();
