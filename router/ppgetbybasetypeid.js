const pprouterb = require("express")
  .Router()
const ppcontroller = require('../controller/productPriceController')
pprouterb
  .get('/:selectsubQuantityTypeID', ppcontroller.getppbybasetypeidTasks)
module.exports = pprouterb
