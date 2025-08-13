# Bylzz Backend API

A comprehensive restaurant management system backend API built with Node.js, Express, and MongoDB.

## Features

- **Category Management**: CRUD operations for product categories
- **Product Management**: CRUD operations for products with pricing
- **Customer Management**: Customer information and management
- **Inventory Management**: Food inventory tracking and management
- **Order Management**: Dine-in orders and running orders
- **Floor & Chair Management**: Restaurant layout management
- **Employee Management**: Staff information and roles
- **Invoice Management**: Billing and invoice generation
- **Tax Management**: Tax rate configuration
- **User Management**: Authentication and user roles

## API Documentation

This API is fully documented using Swagger/OpenAPI 3.0. You can access the interactive API documentation at:

**http://localhost:5001/api-docs**

### What's Included in the Documentation

- **Interactive API Explorer**: Test endpoints directly from the browser
- **Request/Response Schemas**: Detailed data models for all entities
- **Parameter Descriptions**: Clear explanation of all input parameters
- **Response Codes**: Comprehensive list of possible HTTP status codes
- **Example Requests**: Sample data for testing endpoints
- **Tagged Endpoints**: Organized by functional areas (Categories, Products, etc.)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd foodbylzbackend
```

2. Install dependencies:
```bash
npm install
```

3. Set up your MongoDB connection in `db/db.js`

4. Start the server:
```bash
npm start
```

The server will start on port 5001 by default.

### Accessing the API Documentation

Once the server is running, open your browser and navigate to:

```
http://localhost:5001/api-docs
```

## API Endpoints Overview

### Categories (`/categoryType`)
- `POST /` - Create a new category
- `GET /` - Get all categories
- `GET /:name` - Get category by name
- `PUT /` - Update a category
- `DELETE /:_id` - Delete a category

### Products (`/product`)
- `POST /` - Create a new product
- `GET /` - Get all products
- `GET /:_id` - Get product by ID
- `PUT /` - Update a product
- `DELETE /:_id` - Delete a product

### Customers (`/customers`)
- `POST /` - Create a new customer
- `GET /` - Get all customers
- `GET /:_id` - Get customer by ID
- `PUT /` - Update a customer
- `DELETE /:_id` - Delete a customer

### And many more...

## Adding Documentation to New Endpoints

To add Swagger documentation to new endpoints, use JSDoc comments above your route definitions:

```javascript
/**
 * @swagger
 * /your-endpoint:
 *   get:
 *     summary: Brief description
 *     tags: [TagName]
 *     parameters:
 *       - in: path
 *         name: paramName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/YourSchema'
 */
router.get('/your-endpoint', controller.yourFunction);
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add proper Swagger documentation for new endpoints
4. Submit a pull request

## License

This project is licensed under the ISC License.
