import mongoose from "mongoose";

const CustomerAnalysisSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    purchaseCount: {
      type: Number,
      required: true,
    },

    totalSpend: {
      type: Number,
      required: true,
    },

    daysSinceLastPurchase: {
      type: Number,
      required: true,
    },

    lastPurchasedCategory: {
      type: String,
      required: true,
    },

    retentionScore: {
      type: Number,
      required: true,
    },

    riskLevel: {
      type: String,
      required: true,
    },

    segment: {
      type: String,
      required: true,
    },

    campaign: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

export const CustomerAnalysis = mongoose.model(
  "CustomerAnalysis",
  CustomerAnalysisSchema
);