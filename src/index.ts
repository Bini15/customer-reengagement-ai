import { connectDB } from "./config/database";
import express from "express";
import customerRoutes from "./routes/customer.routes";
import dotenv from "dotenv";
import { swaggerUi, swaggerSpec } from "./config/swagger";

dotenv.config();

console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const app = express();

app.use(express.json());

// Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;

// Home Route
app.get("/", (_req, res) => {
  res.status(200).json({
    project: "Customer Re-engagement AI Platform",
    status: "Running",
    description:
      "AI-powered platform for customer retention, segmentation, and personalized campaign generation.",
    endpoints: {
      health: "/health",
      customers: "/customers",
      docs: "/api-docs",
    },
  });
});

// Health Check
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "customer-reengagement-platform",
    timestamp: new Date().toISOString(),
  });
});

// Customer Routes
app.use("/customers", customerRoutes);

// Start Server
async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();