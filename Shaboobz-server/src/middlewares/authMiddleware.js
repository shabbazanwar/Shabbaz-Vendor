import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { Vendor } from "../models/vendorModel.js";
import { AppError } from "./errorHandler.js";

export const protect = async (req, res, next) => {
    let token;

    // Allow vendor registration without authentication
    if (req.path === "/api/vendor/" && req.method === "POST") {
        return next();
    }

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check if the user exists in either User or Vendor model
            const user = await User.findById(decoded.id).select("-password");
            const vendor = await Vendor.findById(decoded.id).select("-password");

            if (!user && !vendor) {
                throw new AppError("Not Authorized: User/Vendor not found", 401);
            }

            req.user = user || vendor; // Attach whichever exists
            return next();
        } catch (error) {
            return next(new AppError("Not Authorized: Invalid Token", 401));
        }
    }

    return next(new AppError("No Token Attached to the Header", 401));
};

export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return next(new AppError("You don't have permission", 403));
        }
        next();
    };
};
