const pprouterq = require("express")
  .Router()
const ppcontroller = require('../controller/productPriceController')
pprouterq
  
  .get('/:selectQtypeID', ppcontroller.getppbyQtypeidTasks)
module.exports = pprouterq
