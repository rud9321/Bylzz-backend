const chairsrunningorderrouter = require("express")
  .Router()
const chairsrunningordercontroller = require('../controller/chairsrunningordercontroller')
chairsrunningorderrouter
  .post('/', chairsrunningordercontroller.createchairsrunningorderTask)
  // .get('/', invoicecontroller.getinvoiceTask)
  // // .get('/:RecieptNumber', invoicecontroller.getinvoicebyidTasks)
   .get('/:receiptnumber', chairsrunningordercontroller.getcreatechairsrunningorderbyidTasks)
  .get('/', chairsrunningordercontroller.getcreatechairsrunningorderTask)
  .delete('/:receiptnumber', chairsrunningordercontroller.deletechairsrunningordereTasks)
  //.get('/:endDateTime', chairsrunningordercontroller.getcreatechairsrunningorderTask)
module.exports = chairsrunningorderrouter

