const KOTsUDRouter = require("express")
  .Router()
const KOTsUDRouterController = require('../controller/KOTsUDsController')
KOTsUDRouter
  .post('/', KOTsUDRouterController.createKOTsUDsTask)
   .get('/:Receiptnumber', KOTsUDRouterController.getKOTsUDsbyRecieptTasks)
  .get('/', KOTsUDRouterController.getcreateKOTsUDsTask)
//   .delete('/:receiptnumber', KOTsUDRouterController.deleteKOTsUDseTasks)
module.exports = KOTsUDRouter

