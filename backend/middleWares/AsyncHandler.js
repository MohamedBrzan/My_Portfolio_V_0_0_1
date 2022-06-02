const AsyncHandler = (controllers) => (req, res, next) =>
  Promise.resolve(controllers(req, res, next)).catch(next);

module.exports = AsyncHandler;
