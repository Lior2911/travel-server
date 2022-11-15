const router = require('express').Router();
const {getCompany,getCompanyById,addCompany,updateCompany,deleteCompany} = require('../controller/companys-ctrl')

router.get('/',getCompany);
router.post('/addCompany',addCompany);
router.get('/getCompanyById/:id',getCompanyById);
router.put('/updateCompany/:id',updateCompany);
router.delete('/deleteCompany/:id',deleteCompany);

module.exports = router;