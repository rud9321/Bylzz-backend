const KOTrunningRouter = require("express")
  .Router()
const KOTrunningRouterController = require('../controller/KOTrunningController')
KOTrunningRouter
  .post('/', KOTrunningRouterController.createKOTrunningOrderTask)
   .get('/:RecieptNumber', KOTrunningRouterController.getKOTrunningOrderbyRecieptTasks)
  .get('/', KOTrunningRouterController.getcreateKOTrunningOrderTask)
  .put('/', KOTrunningRouterController.updateKOTrunningOrder)
   .delete('/:RecieptNumber', KOTrunningRouterController.deleteKOTrunningOrdereTasks)
   .delete('/:KOTStatus/:RecieptNumber', KOTrunningRouterController.deleteMultipleKOTrunningOrdereTasks)
module.exports = KOTrunningRouter

