const subQuantityTypeRouter = require("express")
  .Router()
const subQuantiTypeController = require('../controller/subQuantityTypeController')
subQuantityTypeRouter

  .post('/', subQuantiTypeController.createTask)
  .get('/', subQuantiTypeController.getbTask)
  .get('/:selectQtypeID', subQuantiTypeController.getbyidTasks)
  .delete('/:_id',subQuantiTypeController.deleteTasks)
  .put('/',subQuantiTypeController.update)
module.exports = subQuantityTypeRouter