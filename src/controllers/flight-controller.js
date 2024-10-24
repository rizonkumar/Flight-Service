const { StatusCodes } = require("http-status-codes");
const { MESSAGES } = require("../utils/constants");

const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    SuccessResponse.data = flight;
    SuccessResponse.message = MESSAGES.SUCCESS.FLIGHT_CREATED;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log("Error", error);
    ErrorResponse.error = error.explanation || error.message;
    ErrorResponse.message = MESSAGES.ERROR.CANNOT_CREATE_FLIGHT;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

async function getAllFlights(req, res) {
  try {
    console.log("query", req.query);
    const response = await FlightService.getAllFlights(req.query);
    console.log("Response", response);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log("Error", error);
    ErrorResponse.error = error.explanation || error.message;
    ErrorResponse.message = MESSAGES.ERROR.UNABLE_TO_FETCH_ALL_FLIGHTS;
    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
