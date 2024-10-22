const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { MESSAGES } = require("../utils/constants");
const { compareTime } = require("../utils/helpers/date-time-helper");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    if (!compareTime(data.departureTime, data.arrivalTime)) {
      throw new AppError(
        MESSAGES.ERROR.INVALID_FLIGHT_TIME,
        StatusCodes.BAD_REQUEST
      );
    }
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
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError(
      MESSAGES.ERROR.CANNOT_CREATE_FLIGHT,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createFlight };
