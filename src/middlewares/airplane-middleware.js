const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { MESSAGES } = require("../utils/constants");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = MESSAGES.ERROR.INVALID_INPUT;
    ErrorResponse.error = new AppError(
      [MESSAGES.ERROR.MODEL_NUMBER_REQUIRED],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
