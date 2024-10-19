const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { MESSAGES } = require("../utils/constants");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = error.errors.map((err) => err.message);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      MESSAGES.ERROR.AIRPLANE_CREATE_FAILED,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      MESSAGES.ERROR.UNABLE_TO_FETCH_ALL_AIRPLANES,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        MESSAGES.ERROR.AIRPLANE_NOT_FOUND,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      MESSAGES.ERROR.UNABLE_TO_FETCH_AIRPLANE,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        MESSAGES.ERROR.AIRPLANE_NOT_FOUND,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      MESSAGES.ERROR.UNABLE_TO_FETCH_AIRPLANE,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirplane(id) {
  console.log("ID", id);
  try {
    const airplane = await airplaneRepository.update(id, data);
    console.log("Airplane", airplane);
    return airplane;
  } catch (error) {
    console.log("Error", error);
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        MESSAGES.ERROR.AIRPLANE_NOT_FOUND,
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      MESSAGES.ERROR.UNABLE_TO_FETCH_AIRPLANE,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
