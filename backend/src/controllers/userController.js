import User from "../models/User.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";

// Get all users
export const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  return res.status(200).json({
    success: true,
    message: "Users have been fetched successfully",
    data: users,
  });
});

// Create a new user
export const createUser = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.create({
    username,
    email,
    password,
  });

  return res.status(201).json({
    success: true,
    message: "User has been created successfully",
    data: user,
  });
});

// Get a single user by ID
export const getUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(`User with id ${id} not found`, 404);
  }

  return res.status(200).json({
    success: true,
    message: "User has been fetched successfully",
    data: user,
  });
});

// Update a user
export const updateUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    {
      username,
      email,
    },
    { returnDocument: "after" },
  );

  if (!user) {
    throw new AppError(`User with id ${id} not found`, 404);
  }

  return res.status(200).json({
    success: true,
    message: "User has been updated successfully",
    data: user,
  });
});

// Delete a user
export const deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new AppError(`User with id ${id} not found`, 404);
  }

  return res.status(200).json({
    success: true,
    message: "User has been deleted successfully",
    data: user,
  });
});
