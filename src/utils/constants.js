const MESSAGES = {
  SUCCESS: {
    DEFAULT: "Operation completed successfully",
    AIRPLANE_CREATED: "Successfully created new airplane",
    API_LIVE: "API service is running normally",
    AIRPLANE_FETCHED: "Successfully retrieved airplane details",
    DELETE_AIRPLANE_SUCCESS: "Successfully removed airplane from system",
    UPDATE_AIRPLANE_SUCCESS: "Successfully updated airplane details",
    CITY_CREATED: "Successfully added new city",
    CITIES_FETCHED: "Successfully retrieved all cities",
    UPDATE_CITY_SUCCESS: "Successfully updated city details",
    DELETE_CITY_SUCCESS: "Successfully removed city from system",
    AIRPORT_CREATED: "Successfully added new airport",
    AIRPORT_FETCHED: "Successfully retrieved airport details",
    DELETE_AIRPORT_SUCCESS: "Successfully removed airport from system",
    FLIGHT_CREATED: "Successfully scheduled new flight",
    FLIGHTS_FETCHED: "Successfully retrieved all flight schedules",
    FLIGHT_FETCHED: "Successfully retrieved flight details",
  },
  ERROR: {
    DEFAULT: "System encountered an unexpected error",
    AIRPLANE_CREATE_FAILED: "Unable to add new airplane to system",
    INVALID_INPUT: "Please provide valid input data",
    MODEL_NUMBER_REQUIRED: "Please provide airplane model number",
    RESOURCE_NOT_FOUND: "Requested information not found in system",
    DATABASE_ERROR: "Unable to complete database operation",
    VALIDATION_ERROR: "Input validation failed",
    UNABLE_TO_FETCH_ALL_AIRPLANES: "Unable to retrieve airplane list",
    UNABLE_TO_FETCH_AIRPLANE: "Unable to retrieve airplane details",
    AIRPLANE_NOT_FOUND: "Specified airplane does not exist",
    DELETE_AIRPLANE_FAILED: "Unable to remove airplane from system",
    UPDATE_AIRPLANE_FAILED: "Unable to modify airplane details",
    INVALID_CAPACITY: "Specified airplane capacity is invalid",
    CAPACITY_EXCEEDED: "Airplane capacity exceeds system limit",
    UNABLE_TO_UPDATE_AIRPLANE: "Cannot modify airplane information",
    NOT_FOUND: "Requested information not found",
    CANNOT_CREATE_CITY: "Unable to add new city to system",
    CITY_NAME_REQUIRED: "Please provide city name",
    UNABLE_TO_FETCH_ALL_CITIES: "Unable to retrieve city list",
    CITY_NOT_FOUND: "Specified city does not exist",
    UNABLE_TO_UPDATE_CITY: "Cannot modify city information",
    UNABLE_TO_DELETE_CITY: "Cannot remove city from system",
    UPDATE_CITY_FAILED: "Unable to modify city details",
    DELETE_CITY_FAILED: "Unable to remove city from system",
    CITY_NAME_ALREADY_EXISTS: "City with this name already exists",
    AIRPORT_CREATE_FAILED: "Unable to add new airport to system",
    UNABLE_TO_FETCH_ALL_AIRPORTS: "Unable to retrieve airport list",
    AIRPORT_NOT_FOUND: "Specified airport does not exist",
    UNABLE_TO_FETCH_AIRPORT: "Unable to retrieve airport details",
    DELETE_AIRPORT_FAILED: "Unable to remove airport from system",
    NAME_REQUIRED: "Please provide name",
    CITYID_REQUIRED: "Please provide city ID",
    AIRPORT_CODE_REQUIRED: "Please provide airport code",
    UNABLE_TO_FETCH_ALL_FLIGHTS: "Unable to retrieve flight schedules",
    CANNOT_CREATE_FLIGHT: "Unable to schedule new flight",
    FLIGHT_NUMBER_REQUIRED: "Please provide flight number",
    AIRPLANE_ID_REQUIRED: "Please provide airplane ID",
    DEPARTURE_AIRPORT_CODE_REQUIRED: "Please provide departure airport code",
    ARRIVAL_AIRPORT_CODE_REQUIRED: "Please provide arrival airport code",
    ARRIVATE_TIME_REQUIRED: "Please provide arrival time",
    DEPARTURE_TIME_REQUIRED: "Please provide departure time",
    PRICE_REQUIRED: "Please provide ticket price",
    TOTAL_SEATS_REQUIRED: "Please provide total seat count",
    INVALID_FLIGHT_TIME: "Arrival time must be after departure time",
    FLIGHT_NOT_FOUND: "Specified flight does not exist",
    UNABLE_TO_FETCH_FLIGHT: "Unable to retrieve flight details",
    FAILED_TO_UPDATE_SEATS: "Unable to update seat availability",
    FLIGHT_ID_NOT_FOUND: "Flight ID missing or invalid in request",
    SEATS_REQUIRED: "Seat not found in the incoming request",
  },
  INFO: {
    REQUEST_RECEIVED: "Request accepted and processing",
  },
};

const CONFIG = {
  MAX_AIRPLANE_CAPACITY: 1000,
};

module.exports = {
  MESSAGES,
  CONFIG,
};
