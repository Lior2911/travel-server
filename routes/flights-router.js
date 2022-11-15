const flightRouter = require("express").Router();

const {
  getFlights,
  getFlightById,
  updateFlight,
  deleteFlight,
  addFlight,
  getFlightByFlightNumber,
  getFirstClassFlight,
  getFlightByTime
} = require("../controller/flights-ctrl");

flightRouter.get("/", getFlights);
flightRouter.get("/getFlightById/:id", getFlightById);
flightRouter.post("/addFlight", addFlight);
flightRouter.put("/updateFlight/:id", updateFlight);
flightRouter.delete("/deleteFligt/:id", deleteFlight);
flightRouter.get(
  "/getFlightByFlightNumber/:flightNumber",
  getFlightByFlightNumber
);
flightRouter.get('/isFirstClass',getFirstClassFlight)
flightRouter.get('/byDepartureTime/:departureTime',getFlightByTime)

module.exports = flightRouter;
