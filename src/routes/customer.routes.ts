import { Router } from "express";

import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  getAnalytics
} from "../controllers/customer.controller";

const router = Router();

// Create customer analysis
router.post("/", createCustomer);

// Get all customers
router.get("/", getAllCustomers);

// Get customer by ID
router.get("/analytics", getAnalytics);
router.get("/:id", getCustomerById);

export default router;