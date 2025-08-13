const router = require("express")
  .Router()
const controller = require('../controller/userController')

  
router
  .post('/', controller.createTask)
  .get('/', controller.getTasks)
  .get('/:_id', controller.getbyidTasks)
  .delete('/:_id',controller.deleteTasks)
  .put('/',controller.updateTasks)
module.exports = router