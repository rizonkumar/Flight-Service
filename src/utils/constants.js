const MESSAGES = {
  SUCCESS: {
    DEFAULT: "Operation completed successfully",
    AIRPLANE_CREATED: "Airplane created successfully",
    API_LIVE: "API is live and operational",
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
    AIRPLANE_FETCHED: "Airplane fetched successfully",
  },
  INFO: {
    REQUEST_RECEIVED: "Request received and being processed",
  },
};

module.exports = {
  MESSAGES,
};
