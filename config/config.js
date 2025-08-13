const config = {
  server: {
    port: process.env.PORT || 5001,
    host: process.env.HOST || 'localhost'
  },
  
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/foodbylz',
    options: {}
  },
  

  
  cors: {
    origin: '*',
    methods: ['DELETE', 'PUT', 'GET', 'POST'],
    headers: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
  },
  
  api: {
    name: 'Bylzz Backend API',
    version: '1.0.0',
    description: 'Restaurant Management System API',
    baseUrl: `http://localhost:${process.env.PORT || 5001}`,
    endpoints: {
      documentation: '/api-docs',
      health: '/health',
      welcome: '/welcome',
      home: '/home',
      categories: '/categoryType',
      products: '/product',
      customers: '/customers',
      employees: '/employee',
      inventory: '/inventoryFoodMain',
      orders: '/dine',
      invoices: '/invoice',
      tax: '/tax',
      users: '/User'
    }
  },
  
  welcome: {
    message: 'Welcome to Bylzz Backend API!',
    description: 'A comprehensive restaurant management system API',
    documentation: '/api-docs',
    health: '/health',
    version: '1.0.0'
  },
  
  health: {
    status: 'OK',
    message: 'Bylzz Backend API is running',
    swagger: '/api-docs'
  }
};

module.exports = config;
