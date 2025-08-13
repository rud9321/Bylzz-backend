const invoiceouter = require("express")
  .Router()
const invoicecontroller = require('../controller/invoicecontroller')
invoiceouter
  
  .get('/:createdAt', invoicecontroller.getinvoicebydateTasks2)
  .get('/:startdate/:enddate', invoicecontroller.getinvoicebydateTasks3)
module.exports = invoiceouter