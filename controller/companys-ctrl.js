const countries = require('../models/countries');
const companys = require('../models/flightCompaney');

const getCompany = (req,res)=>{
  res.send(companys)
};
const addCompany = (req,res) => {
  companys.push(req.body.company);
  res.send('company added succsuss')

}
const getCompanyById = (req,res)=>{
  const companyItem = companys.find(company => company.id == req.params.id);
  companyItem? res.send(companyItem) : res.send('the company dosnt exist')
}
const updateCompany = (req,res)=>{
  const findCompany = findCompanyIndex(req);
  if(findCompany>-1){
    countries[findCompany] = req.body.company;
    res.send('company updae succsuess')
  }
}
const deleteCompany =(req,res)=>{
  const companyDeleteIndex = findCompanyIndex(req)
  const removeCompany = companys.splice(companyDeleteIndex,1)
  removeCompany? res.send(companys):res.send('cannot delete company')
}
const findCompanyIndex = (req)=>{
  const companyItem = companys.find(company=>company.id == req.params.id);
  const startIndex = companys.indexOf(companyItem);
  return startIndex;

}
module.exports = {getCompany,addCompany,getCompanyById,updateCompany,deleteCompany}