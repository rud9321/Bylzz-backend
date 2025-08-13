const reserveDinerouter = require("express")
  .Router()
const reservDinecontroller = require('../controller/reserveDineController')
reserveDinerouter
  .get('/:DateTimeStart/:DateTimeEnd', reservDinecontroller.getreservedinebyStartTimeAndEndTimeTasks)
module.exports = reserveDinerouter