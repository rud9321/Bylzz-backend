const customersByMobileNumberRouter = require("express")
  .Router()
const customersByMobileNumberController = require('../controller/customerscontroller')

customersByMobileNumberRouter.get('/:MobileNo', customersByMobileNumberController.getcustomersbyidMobileNumber)
/**
 * @swagger
 * /customers/{_id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal server error
 */
module.exports = customersByMobileNumberRouter