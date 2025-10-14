const AddOnProductRouter = require("express")
  .Router()
const AddOnProductController = require('../controller/addOnProductController')
AddOnProductRouter
  .post('/', AddOnProductController.createAddOnProductTask)
  .get('/', AddOnProductController.getAddOnProductTask)
  // .get('/:selectcategoryID', AddOnProductController.getAddOnProductbyidTasks)
  //.get('/:selectSubQuantityTypeID', AddOnProductController.getAddOnProductbyidTasks2)
  .get('/:_id', AddOnProductController.getAddOnProductbyidTasks)//getproductbyidTasks2
  //.get('/:selectQtypeID', AddOnProductcontroller.getAddOnProductbyidTasks3)
  .get('/:SelectProductId/:SubQuantityTypeID', AddOnProductController.getAddOnProductbyidTasks2)
  .delete('/:_id',AddOnProductController.deleteAddOnProductTasks)
  .put('/',AddOnProductController.updateAddOnProduct)
module.exports = AddOnProductRouter

///:selectcategoryID/:selectQtypeID