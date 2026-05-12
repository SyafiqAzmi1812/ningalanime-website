/**
 * Custom error class for operational (expected) errors.
 * Errors created with this class will be handled gracefully
 * by the error handling middleware.
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = String(statusCode).startsWith("4") ? "fail" : "error";
    this.isOperational = true; // distinguishes from programming bugs

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
