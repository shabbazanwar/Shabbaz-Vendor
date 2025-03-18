import express from "express";
import {
  createVendor,
  getVendorById,
  updateVendor,
  deleteVendor,
} from "../controllers/vendorController.js";
import { protect } from "../middlewares/authMiddleware.js";

const vendorRouter = express.Router();

// Create a Vendor (Protected)
vendorRouter.post("/", createVendor);

// Get Vendor by ID
vendorRouter.get("/:id", getVendorById);

// Update Vendor (Protected)
vendorRouter.put("/:id", protect, updateVendor);

// Delete Vendor (Admin Only - Example)
vendorRouter.delete("/:id", protect, deleteVendor);

export default vendorRouter;
