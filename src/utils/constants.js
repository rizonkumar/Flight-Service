const MESSAGES = {
  SUCCESS: {
    DEFAULT: "Operation completed successfully",
    AIRPLANE_CREATED: "Airplane created successfully",
    API_LIVE: "API is live and operational",
    AIRPLANE_FETCHED: "Airplane fetched successfully",
    DELETE_AIRPLANE_SUCCESS: "Airplane deleted successfully",
    UPDATE_AIRPLANE_SUCCESS: "Airplane updated successfully",
    CITY_CREATED: "City created successfully",
  },
  ERROR: {
    DEFAULT: "An unexpected error occurred",
    AIRPLANE_CREATE_FAILED: "Failed to create airplane",
    INVALID_INPUT: "Invalid input provided",
    MODEL_NUMBER_REQUIRED: "Model number is required",
    RESOURCE_NOT_FOUND: "Requested resource not found",
    DATABASE_ERROR: "Database operation failed",
    VALIDATION_ERROR: "Validation error occurred",
    UNABLE_TO_FETCH_ALL_AIRPLANES: "Cannot fetch data of all the airplanes",
    UNABLE_TO_FETCH_AIRPLANE: "Cannot fetch data of the airplane",
    AIRPLANE_NOT_FOUND: "Airplane not found",
    DELETE_AIRPLANE_FAILED: "Failed to delete airplane",
    UPDATE_AIRPLANE_FAILED: "Failed to update airplane",
    INVALID_CAPACITY: "Invalid airplane capacity",
    CAPACITY_EXCEEDED: "Airplane capacity exceeds maximum limit",
    UNABLE_TO_UPDATE_AIRPLANE: "Unable to update airplane",
    NOT_FOUND: "Requested resource not found",
    CANNOT_CREATE_CITY: "Cannot create city",
    CITY_NAME_REQUIRED: "City name is required",
  },
  INFO: {
    REQUEST_RECEIVED: "Request received and being processed",
  },
};

const CONFIG = {
  MAX_AIRPLANE_CAPACITY: 1000,
};

module.exports = {
  MESSAGES,
  CONFIG,
};
