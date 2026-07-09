import { Router } from "express";

import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  getAnalytics
} from "../controllers/customer.controller";

const router = Router();

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create and analyze a customer
 *     description: Calculates retention score, segments the customer, generates an AI-powered campaign, and stores the analysis in MongoDB.
 *     tags:
 *       - Customers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *               - email
 *               - purchaseCount
 *               - totalSpend
 *               - daysSinceLastPurchase
 *               - lastPurchasedCategory
 *             properties:
 *               id:
 *                 type: string
 *                 example: C001
 *               name:
 *                 type: string
 *                 example: Rahul Sharma
 *               email:
 *                 type: string
 *                 example: rahul@gmail.com
 *               purchaseCount:
 *                 type: integer
 *                 example: 5
 *               totalSpend:
 *                 type: integer
 *                 example: 10000
 *               daysSinceLastPurchase:
 *                 type: integer
 *                 example: 120
 *               lastPurchasedCategory:
 *                 type: string
 *                 example: Footwear
 *     responses:
 *       201:
 *         description: Customer analyzed successfully.
 */
// Create customer analysis
router.post("/", createCustomer);

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all analyzed customers
 *     description: Returns every customer analysis stored in MongoDB.
 *     tags:
 *       - Customers
 *     responses:
 *       200:
 *         description: List of customers returned successfully.
 */

// Get all customers
router.get("/", getAllCustomers);

// Get customer by ID
router.get("/analytics", getAnalytics);
router.get("/:id", getCustomerById);

export default router;