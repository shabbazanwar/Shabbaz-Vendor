import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { Vendor } from "../models/vendorModel.js";
import { AppError } from "../middlewares/errorHandler.js";

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    // Check if user exists in either User or Vendor model
    const user = await User.findOne({ email });
    const vendor = await Vendor.findOne({ email });

    if (!user && !vendor) {
        return next(new AppError("Invalid credentials", 401));
    }

    const account = user || vendor; // Whichever exists
    const isMatch = await account.comparePassword(password);

    if (!isMatch) {
        return next(new AppError("Invalid credentials", 401));
    }

    const token = jwt.sign(
        { id: account._id, role: account.role }, // Store role in token
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.json({
        success: true,
        token,
        role: account.role, // Include role in response
        redirectUrl: getRedirectUrl(account.role), // Send redirect URL
    });
};

// Helper function to determine redirect URL
const getRedirectUrl = (role) => {
    switch (role) {
        case "admin":
            return "/admin/dashboard";
        case "vendor":
            return "/vendor/dashboard";
        default:
            return "/user/dashboard";
    }
};
