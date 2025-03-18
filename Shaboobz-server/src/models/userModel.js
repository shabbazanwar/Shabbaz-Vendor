import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true,
      trim: true,  // Removes extra spaces
    },
    email: { 
      type: String, 
      required: true, 
      unique: true,
      lowercase: true,  // Ensures consistent email format
      trim: true,
    },
    password: { 
      type: String, 
      required: true,
      minlength: 6,  // Enforces a minimum password length
    },
    studentID: { 
      type: String, 
      default: null,  // Keeps it optional
    },
    role: { 
      type: String, 
      enum: ["user", "vendor", "admin"], 
      default: "user",
    },
    address: { 
      type: Object, 
      default: {}, // Prevents undefined errors
    },
    phone: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } // Auto-adds createdAt & updatedAt
);

// 🔹 Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔹 Compare provided password with stored hash
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 🔹 Hide password in API responses
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

// Export Model
export const User = mongoose.model("User", userSchema);
