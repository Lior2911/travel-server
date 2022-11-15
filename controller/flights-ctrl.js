const flights = require("../models/flights");

const getFlights = (req, res) => {
  res.send(flights);
};
const getFlightById = (req, res) => {
  const flightItem = flights.find((flight) => flight.id == req.params.id);
  flightItem ? res.send(flightItem) : res.send("flight not found");
};
const getFlightByFlightNumber = (req, res) => {
  const flightItem = flights.find((flight) => flight.flightNumber == req.params.flightNumber);
  flightItem ? res.send(flightItem) : res.send("flight not found");
}
const addFlight = (req, res) => {
  flights.push(req.body.flight);
  res.send("flight added succsess");
};
const updateFlight = (req, res) => {
  const FlightIndex = flights.find((flight) => flight.id == req.prarms.id);
  if (FlightIndex > -1) {
    flights[FlightIndex] = req.body.flight;
    return res.send("flight update succsess");
  }
  res.send("flight not found");
};
const getFirstClassFlight = (req,res)=>{
  const flightFirstClass = flights.filter(flight => flight.isFirstClass == true)
  flightFirstClass? res.send(flightFirstClass) : res.send('no flight with first class')
}
const getFlightByTime = (req,res)=>{
  const flightsTime = flights.filter(flight=>flight.departureTime == req.params.departureTime)
  flightsTime ? res.send(flightsTime ) :res.send('there is no flight at this time')
}
const deleteFlight = (req, res) => {
  const flightIndex = flights.find(flight => flight.id == req.params.id)
  const removeFlight = flights.splice(flightIndex,1);
  removeFlight ? res.send(flights) : res.send('cannot delete flight')
};

module.exports = {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
  getFlightByFlightNumber,
  getFirstClassFlight,
  getFlightByTime
};
