import jwt from "jsonwebtoken";
import User from "../models/User.js";
import AppError from "../utils/AppError.js";
import catchAsync from "../utils/catchAsync.js";

/**
 * Protect middleware – verifies JWT token and attaches user to req.user.
 */
export const protect = catchAsync(async (req, _res, next) => {
  let token;

  // 1) Get token from Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new AppError(
      "You are not logged in. Please log in to get access.",
      401,
    );
  }

  // 2) Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");

  // 3) Check if user still exists
  const user = await User.findById(decoded.userId).select("+password");
  if (!user) {
    throw new AppError(
      "The user belonging to this token no longer exists.",
      401,
    );
  }

  // 4) Attach user to request
  req.user = user;
  next();
});

/**
 * Authorize middleware – restricts access to specific roles.
 * Usage: router.get("/", protect, authorize("admin"), handler)
 */
export const authorize = (...roles) => {
  return (req, _res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError(
        "You do not have permission to perform this action.",
        403,
      );
    }
    next();
  };
};
