const KOTrunningRouter = require("express")
  .Router()
const KOTrunningRouterController = require('../controller/KOTrunningController')
KOTrunningRouter
  .post('/', KOTrunningRouterController.createKOTrunningOrderTask)
   .get('/:Receiptnumber', KOTrunningRouterController.getKOTrunningOrderbyRecieptTasks)
  .get('/', KOTrunningRouterController.getcreateKOTrunningOrderTask)
//   .delete('/:receiptnumber', KOTrunningRouterController.deleteKOTrunningOrdereTasks)
module.exports = KOTrunningRouter

