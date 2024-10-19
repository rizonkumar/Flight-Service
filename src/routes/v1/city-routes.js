const express = require("express");

const { CityController } = require("../../controllers");
const { CityMiddlwares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  CityMiddlwares.validateCreateRequest,
  CityController.createCity
);

module.exports = router;
