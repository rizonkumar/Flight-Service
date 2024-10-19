const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { MESSAGES, CONFIG } = require("../utils/constants");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const response = await cityRepository.create(data);
    return response;
  } catch (error) {
    console.error("error", error);
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      let explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      MESSAGES.ERROR.CANNOT_CREATE_CITY,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createCity };
