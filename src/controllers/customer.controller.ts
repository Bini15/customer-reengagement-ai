import { Request, Response } from "express";
import { calculateRetentionScore } from "../services/retention.service";
import { getCustomerSegment } from "../services/segmentation.service";
import { generateCampaign } from "../services/aiCampaign.service";
import { CustomerAnalysis } from "../models/CustomerAnalysis";

/**
 * POST /customers
 */
export const createCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const customer = req.body;

    const retention = calculateRetentionScore(
      customer.purchaseCount,
      customer.totalSpend,
      customer.daysSinceLastPurchase
    );

    const segment = getCustomerSegment(
      customer.purchaseCount,
      customer.totalSpend,
      customer.daysSinceLastPurchase
    );

    const campaign = await generateCampaign(
      customer.name,
      segment,
      customer.lastPurchasedCategory
    );

    // Save analysis to MongoDB
    await CustomerAnalysis.create({
      customerId: customer.id,
      name: customer.name,
      email: customer.email,

      purchaseCount: customer.purchaseCount,
      totalSpend: customer.totalSpend,
      daysSinceLastPurchase: customer.daysSinceLastPurchase,
      lastPurchasedCategory: customer.lastPurchasedCategory,

      retentionScore: retention.retentionScore,
      riskLevel: retention.riskLevel,

      segment,
      campaign,
    });

    res.status(201).json({
      success: true,
      customer,
      retention,
      segment,
      campaign,
    });

  } catch (error) {
    console.error("Controller Error:", error);

    res.status(500).json({
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Unknown Error",
    });
  }
};

/**
 * GET /customers
 */
export const getAllCustomers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const customers = await CustomerAnalysis
      .find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: customers.length,
      data: customers,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch customers",
    });
  }
};
export const getCustomerById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const customerId = req.params.id;

    const customer = await CustomerAnalysis.findOne({
      customerId: customerId
    });

    if (!customer) {
      res.status(404).json({
        success: false,
        error: "Customer not found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: customer
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch customer"
    });

  }
};
export const getAnalytics = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {

    const totalCustomers =
      await CustomerAnalysis.countDocuments();

    const highRiskCustomers =
      await CustomerAnalysis.countDocuments({
        riskLevel: "HIGH"
      });

    const mediumRiskCustomers =
      await CustomerAnalysis.countDocuments({
        riskLevel: "MEDIUM"
      });

    const lowRiskCustomers =
      await CustomerAnalysis.countDocuments({
        riskLevel: "LOW"
      });

    const vipCustomers =
      await CustomerAnalysis.countDocuments({
        segment: "VIP"
      });

    const churnedCustomers =
      await CustomerAnalysis.countDocuments({
        segment: "CHURNED"
      });

    res.status(200).json({
      success: true,
      analytics: {
        totalCustomers,
        highRiskCustomers,
        mediumRiskCustomers,
        lowRiskCustomers,
        vipCustomers,
        churnedCustomers
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch analytics"
    });

  }
};