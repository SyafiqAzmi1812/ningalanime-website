import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";

export const signup = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || "dev_secret",
    {
      expiresIn: "1h",
    },
  );

  return res.status(201).json({
    success: true,
    message: "Registration successful",
    data: {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    },
  });
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new AppError("Incorrect password", 401);
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email,
    },
    process.env.JWT_SECRET || "dev_secret",
    { expiresIn: "1h" },
  );

  return res.status(200).json({
    success: true,
    message: "Logged in successfully",
    data: {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    },
  });
});
