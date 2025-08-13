const chairsrunningorderrouter = require("express")
  .Router()
const chairsrunningordercontroller = require('../controller/chairsrunningordercontroller')
chairsrunningorderrouter
  .post('/', chairsrunningordercontroller.createchairsrunningorderTask)
  // .get('/', invoicecontroller.getinvoiceTask)
  // // .get('/:RecieptNumber', invoicecontroller.getinvoicebyidTasks)
   .get('/:createdAt', chairsrunningordercontroller.getcreatechairsrunningorderbyidTasks)
  .get('/', chairsrunningordercontroller.getcreatechairsrunningorderTask)
  .delete('/:createdAt', chairsrunningordercontroller.deletechairsrunningordereTasks)
  //.get('/:endDateTime', chairsrunningordercontroller.getcreatechairsrunningorderTask)
module.exports = chairsrunningorderrouter

