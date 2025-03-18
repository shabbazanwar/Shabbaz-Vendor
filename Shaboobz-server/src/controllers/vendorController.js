import expressAsyncHandler from "express-async-handler";
import { Vendor } from "../models/vendorModel.js";
import { AppError } from "../middlewares/errorHandler.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/utils.js";

// @desc Create a new Vendor
// @route POST /api/vendor/register
// @access Public
export const createVendor = expressAsyncHandler(async (req, res) => {
  const { storeName, storeDescription, storeImage, email, password } = req.body;

  if (!storeName || !storeDescription || !email || !password) {
    throw new AppError("All fields (storeName, storeDescription, email, password) are required", 400);
  }

  // Check if vendor with the same email already exists
  const existingVendor = await Vendor.findOne({ email });
  if (existingVendor) {
    throw new AppError("This email is already registered as a vendor", 400);
  }

  // Hash password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create vendor
  const newVendor = await Vendor.create({
    storeName,
    storeDescription,
    storeImage,
    email,
    password: hashedPassword,
    role: "vendor",
  });

  res.status(201).json({
    success: true,
    message: "Vendor account created successfully",
    data: {
      _id: newVendor._id,
      storeName: newVendor.storeName,
      storeDescription: newVendor.storeDescription,
      storeImage: newVendor.storeImage,
      email: newVendor.email,
      role: newVendor.role,
      token: generateToken(newVendor._id, "vendor"), // Return JWT token
    },
  });
});

// @desc Login Vendor
// @route POST /api/vendor/login
// @access Public
export const loginVendor = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Please enter both email and password", 400);
  }

  const vendor = await Vendor.findOne({ email });

  if (vendor && (await bcrypt.compare(password, vendor.password))) {
    res.json({
      success: true,
      message: "Login successful",
      data: {
        _id: vendor._id,
        storeName: vendor.storeName,
        email: vendor.email,
        role: vendor.role,
        token: generateToken(vendor._id, "vendor"),
      },
    });
  } else {
    throw new AppError("Invalid email or password", 401);
  }
});

// @desc Get Vendor by ID
// @route GET /api/vendor/:id
// @access Private (Vendor Only)
export const getVendorById = expressAsyncHandler(async (req, res) => {
  const vendor = await Vendor.findById(req.params.id).select("-password");

  if (!vendor) {
    throw new AppError("Vendor not found", 404);
  }

  res.json({ success: true, data: vendor });
});

// @desc Update Vendor Profile
// @route PUT /api/vendor/:id
// @access Private (Vendor Only)
export const updateVendor = expressAsyncHandler(async (req, res) => {
  const { storeName, storeDescription, storeImage } = req.body;
  const vendor = await Vendor.findById(req.params.id);

  if (!vendor) {
    throw new AppError("Vendor not found", 404);
  }

  // Ensure only the vendor is updating their account
  if (vendor._id.toString() !== req.user._id.toString()) {
    throw new AppError("Unauthorized: You can only update your own vendor profile", 403);
  }

  vendor.storeName = storeName || vendor.storeName;
  vendor.storeDescription = storeDescription || vendor.storeDescription;
  vendor.storeImage = storeImage || vendor.storeImage;

  await vendor.save();

  res.json({
    success: true,
    message: "Vendor updated successfully",
    data: vendor,
  });
});

// @desc Delete Vendor
// @route DELETE /api/vendor/:id
// @access Private (Admin Only)
export const deleteVendor = expressAsyncHandler(async (req, res) => {
  const vendor = await Vendor.findById(req.params.id);

  if (!vendor) {
    throw new AppError("Vendor not found", 404);
  }

  await vendor.deleteOne();

  res.json({
    success: true,
    message: "Vendor deleted successfully",
  });
});
