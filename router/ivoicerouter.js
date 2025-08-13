const invoiceouter = require("express")
  .Router()
const invoicecontroller = require('../controller/invoicecontroller')
invoiceouter
  .post('/', invoicecontroller.createinvoiceTask)
  // .get('/', invoicecontroller.getinvoiceTask)
  .get('/:RecieptNumber', invoicecontroller.getinvoicebyidTasks)
   .put('/', invoicecontroller.updateinvoice)
  .get('/:createdAt', invoicecontroller.getinvoicebydateTasks2)
module.exports = invoiceouter