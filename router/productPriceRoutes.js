const productPriceRouter = require("express")
  .Router()
const productPriceController = require('../controller/productPriceController')
productPriceRouter
  .post('/', productPriceController.createppTask)
  .get('/', productPriceController.getppTask)
  .get('/:selectcategoryID', productPriceController.getppbyidTasks)
  .get('/:ShortCodeNumber', productPriceController.getProductPriceByShortcode)
  .get('/:ShortCodeString', productPriceController.getProductPriceByShortcode)
  //.get('/:selectSubQuantityTypeID', productPriceController.getppbyidTasks2)
  .get('/:SelectProductId', productPriceController.getproductbyidTasks2)
  //.get('/:selectQtypeID', ppcontroller.getppbyidTasks3)
  .get('/:SelectProductId/:selectSubQuantityTypeID/:selectQtypeID/:selectcategoryID', productPriceController.getppbyidTasks2)
  .delete('/:_id',productPriceController.deleteppTasks)
  .put('/',productPriceController.updatepp)
module.exports = productPriceRouter

///:selectcategoryID/:selectQtypeID