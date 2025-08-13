const getQuantityTypeNameRouter = require("express")
  .Router()
const getQuantityTypeNamcontroller = require('../controller/QtypeController')
getQuantityTypeNameRouter
  
  .get('/:name', getQuantityTypeNamcontroller.getByQuntityTypeName)
module.exports = getQuantityTypeNameRouter
