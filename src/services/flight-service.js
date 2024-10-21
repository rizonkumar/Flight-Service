const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { MESSAGES } = require("../utils/constants");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const response = await flightRepository.create(data);
    return response;
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      let explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      MESSAGES.ERROR.CANNOT_CREATE_FLIGHT,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createFlight };
