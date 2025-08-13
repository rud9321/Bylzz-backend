const reserveDinerouter = require("express")
  .Router()
const reservDinecontroller = require('../controller/reserveDineController')
reserveDinerouter
  .post('/', reservDinecontroller.createreserveDineTask)
  .get('/', reservDinecontroller.getreservedineTask)
  .get('/:_id', reservDinecontroller.getreservedinebyidTasks)
  .get('/:DateTimeStart/:DateTimeEnd', reservDinecontroller.getreservedinebyStartTimeAndEndTimeTasks)
  .delete('/:_id', reservDinecontroller.deletereservedineTasks)
  .put('/',reservDinecontroller.updatereservedine)
module.exports = reserveDinerouter