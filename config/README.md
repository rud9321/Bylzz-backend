# Configuration

This directory contains all configuration files for the Bylzz Backend API.

## Files

### `config.js`
Main configuration file that centralizes all app settings.

### `env.example`
Example environment variables file. Copy this to `.env` and modify as needed.

## Configuration Sections

### Server Configuration
- **PORT**: Server port (default: 5001)
- **HOST**: Server host (default: localhost)

### Database Configuration
- **MONGODB_URI**: MongoDB connection string
- **options**: Mongoose connection options



### CORS Configuration
- **origin**: Allowed origins
- **methods**: Allowed HTTP methods
- **headers**: Allowed headers

### API Configuration
- **name**: API name
- **version**: API version
- **description**: API description
- **baseUrl**: Base URL for the API
- **endpoints**: Available API endpoints

### Welcome & Health Messages
- **welcome**: Welcome message configuration
- **health**: Health check response configuration

## Environment Variables

Set these in your `.env` file:

```bash
PORT=5001
HOST=localhost
MONGODB_URI=mongodb://localhost:27017/foodbylz
NODE_ENV=development
```

## Usage

```javascript
const config = require('./config/config');

// Access configuration
const port = config.server.port;
const dbUri = config.database.uri;
const apiName = config.api.name;
```

## Benefits

- **Centralized**: All configuration in one place
- **Environment-aware**: Easy to switch between dev/staging/prod
- **Maintainable**: Easy to update and modify
- **Reusable**: Consistent across the application
- **Type-safe**: Clear structure and organization
