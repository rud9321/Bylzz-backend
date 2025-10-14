const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bylzz Backend API',
      version: '1.0.0',
      description: 'A comprehensive API for restaurant management system including categories, products, inventory, orders, and more.',
      contact: {
        name: 'Bylzz Team',
        email: 'support@bylzz.com'
      },
      servers: [
        {
          url: 'http://localhost:5001',
          description: 'Development server'
        }
      ]
    },
    components: {
      schemas: {
        Category: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Category ID' },
            name: { type: 'string', description: 'Category name' },
            description: { type: 'string', description: 'Category description' }
          }
        },
        Product: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Product ID' },
            name: { type: 'string', description: 'Product name' },
            description: { type: 'string', description: 'Product description' },
            price: { type: 'number', description: 'Product price' },
            categoryId: { type: 'string', description: 'Category ID' }
          }
        },
        Invoice: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Invoice ID' },
            customerId: { type: 'string', description: 'Customer ID' },
            items: { type: 'array', items: { type: 'object' } },
            total: { type: 'number', description: 'Total amount' },
            status: { type: 'string', description: 'Invoice status' }
          }
        },
        Customer: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Customer ID' },
            name: { type: 'string', description: 'Customer name' },
            email: { type: 'string', description: 'Customer email' },
            phone: { type: 'string', description: 'Customer phone' }
          }
        },
        Employee: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Employee ID' },
            name: { type: 'string', description: 'Employee name' },
            email: { type: 'string', description: 'Employee email' },
            role: { type: 'string', description: 'Employee role' }
          }
        },
        Floor: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Floor ID' },
            name: { type: 'string', description: 'Floor name' },
            description: { type: 'string', description: 'Floor description' }
          }
        },
        Chair: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Chair ID' },
            name: { type: 'string', description: 'Chair name' },
            floorId: { type: 'string', description: 'Floor ID' },
            status: { type: 'string', description: 'Chair status' }
          }
        },
        Dine: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Dine ID' },
            customerId: { type: 'string', description: 'Customer ID' },
            chairId: { type: 'string', description: 'Chair ID' },
            items: { type: 'array', items: { type: 'object' } },
            total: { type: 'number', description: 'Total amount' },
            status: { type: 'string', description: 'Dine status' }
          }
        },
        InventoryFoodMain: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Inventory ID' },
            name: { type: 'string', description: 'Food item name' },
            quantity: { type: 'number', description: 'Available quantity' },
            unit: { type: 'string', description: 'Unit of measurement' }
          }
        },
        ProductPrice: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Price ID' },
            productId: { type: 'string', description: 'Product ID' },
            quantityTypeId: { type: 'string', description: 'Quantity type ID' },
            price: { type: 'number', description: 'Price' }
          }
        },
        QuantityType: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Quantity type ID' },
            name: { type: 'string', description: 'Quantity type name' },
            description: { type: 'string', description: 'Quantity type description' }
          }
        },
        SubQuantityType: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Sub quantity type ID' },
            name: { type: 'string', description: 'Sub quantity type name' },
            baseTypeId: { type: 'string', description: 'Base quantity type ID' }
          }
        },
        Tax: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'Tax ID' },
            name: { type: 'string', description: 'Tax name' },
            rate: { type: 'number', description: 'Tax rate percentage' },
            description: { type: 'string', description: 'Tax description' }
          }
        },
        addOnProducts: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'AddOnProduct ID' },
            Name: { type: 'string', description: 'AddOnProduct name' },
            Price: { type: 'number', description: 'AddOnProduct Price' },
            description: { type: 'string', description: 'AddOnProduct description' },
            selectProductId: { type: 'string', description: 'Tax description' }
          }
        },
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string', description: 'User ID' },
            username: { type: 'string', description: 'Username' },
            email: { type: 'string', description: 'User email' },
            role: { type: 'string', description: 'User role' }
          }
        }
      }
    },
           tags: [
         { name: 'Categories', description: 'Category management endpoints' },
         { name: 'Products', description: 'Product management endpoints' },
         { name: 'Inventory', description: 'Inventory management endpoints' },
         { name: 'Orders', description: 'Order and dine management endpoints' },
         { name: 'Customers', description: 'Customer management endpoints' },
         { name: 'Employees', description: 'Employee management endpoints' },
         { name: 'Floor & Chairs', description: 'Floor and chair management endpoints' },
         { name: 'Pricing', description: 'Product pricing and quantity type endpoints' },
         { name: 'Invoices', description: 'Invoice management endpoints' },
         { name: 'Items', description: 'Item management endpoints' },
         { name: 'Tax', description: 'Tax management endpoints' },
         { name: 'Users', description: 'User management endpoints' },
         { name: 'Company Profile', description: 'Company profile management endpoints' }
       ]
  },
  apis: ['./router/*.js', './controller/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs;
