const { StatusCodes } = require("http-status-codes");

const { AirplaneService } = require("../services");
const { error } = require("winston");

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
    console.log("Airplane", airplane);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error creating airplane",
      data: {},
      error: error.message,
    });
  }
}

module.exports = { createAirplane };
