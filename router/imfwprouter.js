const router = require("express")
  .Router()
const inventorymainfoodproduct = require('../controller/inventorymainfoodproduct')

  
router
  .post('/', inventorymainfoodproduct.createTask)
  .get('/', inventorymainfoodproduct.getTasks)
  .get('/:ProductId/:SubQuantityTypeID', inventorymainfoodproduct.getbyidTasks)
  .delete('/:_id',inventorymainfoodproduct.deleteTasks)
  .put('/',inventorymainfoodproduct.updateTasks)
module.exports = router