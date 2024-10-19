const MESSAGES = {
  SUCCESS: {
    DEFAULT: "Operation completed successfully",
    AIRPLANE_CREATED: "Airplane created successfully",
    API_LIVE: "API is live and operational",
    AIRPLANE_FETCHED: "Airplane fetched successfully",
    DELETE_AIRPLANE_SUCCESS: "Airplane deleted successfully",
    UPDATE_AIRPLANE_SUCCESS: "Airplane updated successfully",
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
  },
  INFO: {
    REQUEST_RECEIVED: "Request received and being processed",
  },
};

module.exports = {
  MESSAGES,
};
