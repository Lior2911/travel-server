const router = require("express").Router();
const {
  getCountries,
  getCountryById,
  updateCountry,
  addCountry,
  deleteCountry,
} = require("../controller/countries-ctrl");

router.get('/',getCountries);
router.get('/getCountryById/:id', getCountryById);
router.post('/addCountry' , addCountry);
router.delete('/deleteCountry/:id',deleteCountry);
router.put('/updateCountry/:id' , updateCountry);

module.exports = router