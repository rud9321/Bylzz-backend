const router = require("express")
  .Router()
const controller = require('../controller/chaircontroller')

  
router
  .get('/:table_id', controller.getchairbytable_idTasks)
  .put('/:_id/:chairorderstatus',controller.updatechairstatusTasks)
module.exports = router