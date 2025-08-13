const subQuantityTypeRouter = require("express")
  .Router()
const subQuantiTypeControllerForName = require('../controller/subQuantityTypeController')
subQuantityTypeRouter
 .get('/:name', subQuantiTypeControllerForName.getbyNameTasks)
module.exports = subQuantityTypeRouter