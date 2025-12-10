const chairsrunningorderrouter = require("express")
  .Router()
const chairsrunningordercontroller = require('../controller/chairsrunningordercontroller')
chairsrunningorderrouter
  .post('/', chairsrunningordercontroller.createchairsrunningorderTask)
   .get('/:receiptnumber', chairsrunningordercontroller.getcreatechairsrunningorderbyidTasks)
  .get('/', chairsrunningordercontroller.getcreatechairsrunningorderTask)
  .delete('/:receiptnumber', chairsrunningordercontroller.deletechairsrunningordereTasks)
module.exports = chairsrunningorderrouter

