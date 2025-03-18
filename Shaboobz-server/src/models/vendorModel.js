import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const subscriptionSchema = new mongoose.Schema(
  {
    plan: {
      type: String,
      enum: ["basic", "premium"],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { _id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual field to auto-calculate isActive
subscriptionSchema.virtual("isActive").get(function () {
  return this.endDate > new Date();
});

const vendorSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
      required: true,
      unique: true,
      index: true, // Index for faster search
    },
    storeDescription: {
      type: String,
      required: true,
    },
    storeImage: {
      type: String,
      default: "https://yourdefaultimage.com/default.jpg",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    subscription: subscriptionSchema,
  },
  { timestamps: true }
);

// Hash password before saving
vendorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password verification method
vendorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const Vendor = mongoose.model("Vendor", vendorSchema);
