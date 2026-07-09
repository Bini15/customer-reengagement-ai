import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Customer Re-engagement AI API",
      version: "1.0.0",
      description:
        "AI-powered backend for customer retention, segmentation, and personalized campaign generation.",
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === "production"
            ? "https://customer-reengagement-ai.onrender.com"
            : "http://localhost:3000",
      },
    ],
  },

  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };