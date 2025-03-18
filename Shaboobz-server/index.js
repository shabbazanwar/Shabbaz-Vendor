import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { errorHandler, notFoundErrorHandler } from "./src/middlewares/errorHandler.js";
import userRouter from "./src/routes/userRoutes.js";
import vendorRouter from "./src/routes/vendorRoutes.js"; // ✅ Import Vendor Routes
import { dbConnect } from "./src/utils/utils.js"; // Database connection setup

// Load Environment Variables from .env file
dotenv.config();

// Connect to MongoDB
dbConnect();

// Initialize Express app
const app = express();

// Middleware Setup
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow cookies & sessions
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static("uploads"));

// ✅ Add API routes
app.use("/api/user", userRouter);
app.use("/api/vendor", vendorRouter); // ✅ Now your frontend can call this!

// Error Handler Middlewares
app.use(errorHandler);
app.use(notFoundErrorHandler);

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
