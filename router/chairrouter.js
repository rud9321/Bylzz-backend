const router = require("express")
  .Router()
const controller = require('../controller/chaircontroller')

  
router
  .post('/', controller.createTask)
  .get('/', controller.getTasks)
  .get('/:_id', controller.getchairbyidTasks)
  .delete('/:_id',controller.deleteTasks)
  .put('/',controller.updateTasks)
module.exports = router
