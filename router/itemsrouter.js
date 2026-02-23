const itemsRouter = require("express")
  .Router()
const itemsController = require('../controller/itemcontroller')

/**
 * @swagger
 * /item:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Item name
 *               description:
 *                 type: string
 *                 description: Item description
 *               price:
 *                 type: number
 *                 description: Item price
 *     responses:
 *       201:
 *         description: Item created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
itemsRouter.post('/', itemsController.createitemsTask)

/**
 * @swagger
 * /item:
 *   get:
 *     summary: Get all items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of all items
 *       500:
 *         description: Internal server error
 */
itemsRouter.get('/', itemsController.getitemTask)

/**
 * @swagger
 * /item/{Invoiceid}:
 *   get:
 *     summary: Get item by invoice ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: Invoiceid
 *         required: true
 *         schema:
 *           type: string
 *         description: Invoice ID
 *     responses:
 *       200:
 *         description: Item found
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */
itemsRouter.get('/:Invoiceid', itemsController.getiitembyidTasks)

/**
 * @swagger
 * /item:
 *   put:
 *     summary: Update an item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - _id
 *             properties:
 *               _id:
 *                 type: string
 *                 description: Item ID
 *               name:
 *                 type: string
 *                 description: Item name
 *               description:
 *                 type: string
 *                 description: Item description
 *               price:
 *                 type: number
 *                 description: Item price
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */
itemsRouter.put('/', itemsController.updateitems)

/**
 * @swagger
 * /item/{Invoiceid}/{Productid}/{SubQuantityTypeID}:
 *   delete:
 *     summary: Delete an item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: Invoiceid
 *         required: true
 *         schema:
 *           type: string
 *         description: Invoice ID
 *       - in: path
 *         name: Productid
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *       - in: path
 *         name: SubQuantityTypeID
 *         required: true
 *         schema:
 *           type: string
 *         description: Sub quantity type ID
 *     responses:
 *       200:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 *       500:
 *         description: Internal server error
 */
itemsRouter.delete('/:Invoiceid/:Productid/:SubQuantityTypeID/:_id', itemsController.deleteItemsTasks)

module.exports = itemsRouter