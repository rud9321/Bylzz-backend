const router = require("express")
  .Router()
const inventoryfoodmaincontroller = require('../controller/inventoryfoodmaincontroller')

  
router
  .post('/', inventoryfoodmaincontroller.createTask)
  .get('/', inventoryfoodmaincontroller.getTasks)
  .get('/:_id', inventoryfoodmaincontroller.getbyidTasks)
  .delete('/:_id',inventoryfoodmaincontroller.deleteTasks)
  .put('/',inventoryfoodmaincontroller.updateTasks)
module.exports = router