import { connectDB } from "./config/database";
import express from "express";
import customerRoutes from "./routes/customer.routes";
import dotenv from "dotenv";

dotenv.config();
console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const app = express();
app.use(express.json());

const PORT = 3000;
app.get("/", (_req, res) => {
  res.status(200).json({
    project: "Customer Re-engagement AI Platform",
    status: "Running",
    description:
      "AI-powered platform for customer retention, segmentation, and personalized campaign generation.",
    endpoints: {
      health: "/health",
      customers: "/customers",
    },
  });
});

// Health Check Route
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "customer-reengagement-platform",
    timestamp: new Date().toISOString(),
  });
});

app.use("/customers", customerRoutes);

// Start Server
async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
