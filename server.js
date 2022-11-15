const express = require("express");
const cors = require("cors");
const CountryRouter = require("./routes/country-router");
const CompanysRouter = require("./routes/companys-router");
const FlightRouter = require("./routes/flights-router");

const app = express();
const port = 7070;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/countries", CountryRouter);
app.use("/companys", CompanysRouter);
app.use("/flights", FlightRouter);

app.get("/", (req, res) => {
  res.send({ message: "succsess" });
});

app.listen(port, () => {
  console.log(`server is listening to port ${port} `);
});
