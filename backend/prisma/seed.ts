// prisma/seed.ts
import { PrismaClient } from "../src/generated/client/index.js"; // Note: .js extension is required in ESM
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// 1. Setup the PostgreSQL Driver Adapter
const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 2. Initialize Prisma Client with the adapter
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...");

  // 1. Create a Sample User
  const user = await prisma.user.upsert({
    where: { email: "john.doe@example.com" },
    update: {},
    create: {
      email: "john.doe@example.com",
      fullName: "John Doe",
    },
  });

  // 2. Create the CIPM Course
  const course = await prisma.course.create({
    data: {
      title: "CIPM Certification Prep",
      description:
        "Comprehensive preparation for the Chartered Institute of Personnel Management exams.",
    },
  });

  // 3. Create a Module
  const module = await prisma.module.create({
    data: {
      title: "CIPM Level 1 (Foundational)",
      courseId: course.id,
    },
  });

  // 4. Create the HR Compliance Exam
  await prisma.exam.create({
    data: {
      title: "HR Compliance Basics",
      duration: 60,
      moduleId: module.id,
      questions: {
        create: [
          {
            text: "Which of the following acts primarily governs employment relationships in Nigeria?",
            options: [
              "Companies and Allied Matters Act",
              "The Labour Act",
              "The Criminal Code",
              "The Constitution",
            ],
            correctAnswer: 1, // "The Labour Act"
            explanation:
              'The Labour Act is the primary legislation governing employment relationships for "workers" in Nigeria.',
          },
          {
            text: "What is the standard notice period for termination of employment for a staff who has served for 5 years under the Labour Act?",
            options: ["1 week", "2 weeks", "1 month", "3 months"],
            correctAnswer: 2, // "1 month"
            explanation:
              "For employees with service periods of 5 years or more, the minimum notice period is one month.",
          },
        ],
      },
    },
  });

  // 5. Enroll the user
  await prisma.enrollment.create({
    data: {
      userId: user.id,
      courseId: course.id,
      paid: true,
    },
  });

  console.log("✅ CIPM Seed Data Loaded Successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end(); // Important: Close the pg pool
  });
