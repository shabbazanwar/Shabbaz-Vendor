import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils/utils.js";
import { AppError } from "../middlewares/errorHandler.js";

// @desc Register a new user
// @route POST /api/user/register
// @access Public
export const registerUser = expressAsyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new AppError("User already exists", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
    } else {
        throw new AppError("Invalid User Data", 400);
    }
});

// @desc Login a user
// @route POST /api/user/login
// @access Public
export const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new AppError("Please input all fields!", 400);
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        throw new AppError("Invalid Email or Password", 401);
    }     
});

export const handleLogin = () => {
    const userData = { name: "John Doe", email: "john@example.com" };
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.reload(); // Refresh page to update navbar
}; 

// @desc Get user profile
// @route GET /api/user/profile
// @access Private
export const profile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            phone: user.phone,
            isActive: user.isActive,
        });
    } else {
        throw new AppError("User Not Found", 404);
    }
});

// @desc Update user profile
// @route PUT /api/user/profile
// @access Private
export const updateProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.address = req.body.address || user.address;
        user.phone = req.body.phone || user.phone;

        if (req.body.password) {
            user.password = await bcrypt.hash(req.body.password, 10);
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            phone: updatedUser.phone,
            isActive: updatedUser.isActive,
            address: updatedUser.address,
        });
    } else {
        throw new AppError("User Not Found", 404);
    }
});

// @desc Get all users
// @route GET /api/user
// @access Private (Admin)
export const getAllProfile = expressAsyncHandler(async (req, res) => {
    const users = await User.find();

    if (users.length > 0) {
        res.json(users);
    } else {
        throw new AppError("No Users Found", 404);
    }
});

// @desc Delete user profile
// @route DELETE /api/user/:id
// @access Private (Admin)
export const deleteUserProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        throw new AppError("User Not Found", 404);
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User Removed" });
});
