const countries = require('../models/countries');

const getCountries = (req,res)=>{

  res.send(countries)
}
const getCountryById = (req,res)=>{
  const countryItem = countries.find(country => country.id == req.params.id)
  countryItem ? res.send(countryItem) : res.send("not found")
}

const addCountry = (req,res)=>{
  countries.push(req.body.country)
  res.send("country added succsess")
}
const updateCountry = (req,res)=>{
  const countryIndex = findCountryhIndex(req);
  if (countryIndex<-1){
    countries[countryIndex] = req.body.country;
    return res.send('update succsess')
  }
  res.send('country not found')
}
const deleteCountry = (req,res)=>{
  const startIndex = findCountryhIndex(req);
  const removeCountry = countries.splice(startIndex,1);
  removeCountry ? res.send(countries): res.send('cannot delete');
}
const findCountryhIndex = (req)=>{
const countryItem = countries.find(country=>country.id == req.params.id);
const startIndex = countries.indexOf(countryItem)
return startIndex;
}
module.exports={
  getCountries,
  addCountry,
  getCountryById,
  updateCountry,
  deleteCountry
}