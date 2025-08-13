const getproductbycategoryrouter = require("express")
  .Router()
const productsbycategorycontroller = require('../controller/productcontroller')
getproductbycategoryrouter
  
  //.get('/:_id', productscontroller.getproductbyidTasks2)
  .get('/:selectcategoryID', productsbycategorycontroller.getproductbyidTasks)
  
module.exports = getproductbycategoryrouter