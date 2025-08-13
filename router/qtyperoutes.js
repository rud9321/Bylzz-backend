const qtyperouter = require("express")
  .Router()
const Qtypecontroller = require('../controller/QtypeController')
qtyperouter
  .post('/', Qtypecontroller.createQtypeTask)
  .get('/', Qtypecontroller.getQtypeTasks)
  .delete('/:_id',Qtypecontroller.deleteQtypeTasks)
  .get('/:_id',Qtypecontroller.getidTasks)
  .get('/:name', Qtypecontroller.getByQuntityTypeName)
  .put('/',Qtypecontroller.updateQtype)
module.exports = qtyperouter
