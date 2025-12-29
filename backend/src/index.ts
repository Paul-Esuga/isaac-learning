import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import examRoutes from "./routes/examRoutes.js"; // Import the new route
import webhookRoutes from "./routes/webhook.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(webhookRoutes);

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/exams", examRoutes);

// Basic Health Check Route
app.get("/", (req: Request, res: Response) => {
  res.send("Isaac Learning API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});
