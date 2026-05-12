/**
 * Wraps an async route handler to catch rejected promises
 * and forward them to the error handling middleware.
 *
 * Usage:  router.get("/endpoint", catchAsync(handler));
 */
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
