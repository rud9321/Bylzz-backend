const productbynameouter = require("express")
  .Router()
const productscontroller = require('../controller/productcontroller')
productbynameouter
 
  .get('/:Productname', productscontroller.getproductbyProductNameTasks2)
module.exports = productbynameouter