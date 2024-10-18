const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Model number is required",
      success: false,
      data: {},
      error: {
        explanations: "Model number not found in the incoming request",
      },
    });
  }
  next();
}

module.exports = { validateCreateRequest };
