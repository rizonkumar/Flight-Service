const { StatusCodes } = require("http-status-codes");
const { MESSAGES } = require("../utils/constants");

const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
 * POST: /airplanes
 *
 * req-body {modelNumber: "airbus302", capacity: 200}
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    SuccessResponse.message = MESSAGES.SUCCESS.AIRPLANE_CREATED;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error.explanation || error.message;
    ErrorResponse.message = MESSAGES.ERROR.AIRPLANE_CREATE_FAILED;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

module.exports = { createAirplane };
