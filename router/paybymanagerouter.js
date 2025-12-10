const router = require("express")
  .Router()
const controller = require('../controller/paybycontroller')

  
router
  .post('/', controller.createTask)
  .get('/', controller.getTasks)
  .delete('/:_id',controller.deleteTasks)
  .put('/',controller.updateTasks)
  .put('/:_id',controller.updateByPayByIdTask)
module.exports = router
