const express = require('express');
const connectDB = require('./db/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const config = require('./config/config');

const app = express();
app.use(express.json());

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", config.cors.origin);
    res.header('Access-Control-Allow-Methods', config.cors.methods.join(', '));
    res.header("Access-Control-Allow-Headers", config.cors.headers.join(', '));
    next();
 });

connectDB();

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.get('/welcome', (req, res) => {
  res.json(config.welcome);
});

app.get('/health', (req, res) => {
  res.json({
    ...config.health,
    timestamp: new Date().toISOString()
  });
});

app.get('/api-info', (req, res) => {
  res.json({
    ...config.api,
    swagger: '/api-docs'
  });
});

app.get('/home', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bylzz Backend API</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; text-align: center; }
            .btn { display: inline-block; padding: 12px 24px; margin: 10px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; }
            .btn:hover { background: #0056b3; }
            .btn-secondary { background: #6c757d; }
            .btn-secondary:hover { background: #545b62; }
            .endpoints { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
            .endpoint { margin: 10px 0; padding: 10px; background: white; border-left: 4px solid #007bff; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Bylzz Backend API</h1>
            <p style="text-align: center; color: #666; font-size: 18px;">Restaurant Management System API</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="/api-docs" class="btn">📚 Open Swagger UI</a>
                <a href="/api-info" class="btn btn-secondary">ℹ️ API Info</a>
                <a href="/health" class="btn btn-secondary">💚 Health Check</a>
            </div>
            
            <div class="endpoints">
                <h3>🔗 Quick Links</h3>
                <div class="endpoint"><strong>Categories:</strong> <a href="/categoryType">/categoryType</a></div>
                <div class="endpoint"><strong>Products:</strong> <a href="/product">/product</a></div>
                <div class="endpoint"><strong>Customers:</strong> <a href="/customers">/customers</a></div>
                <div class="endpoint"><strong>Employees:</strong> <a href="/employee">/employee</a></div>
                <div class="endpoint"><strong>Inventory:</strong> <a href="/inventoryFoodMain">/inventoryFoodMain</a></div>
                <div class="endpoint"><strong>Orders:</strong> <a href="/dine">/dine</a></div>
                <div class="endpoint"><strong>Invoices:</strong> <a href="/invoice">/invoice</a></div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <p>🎯 <strong>Main Documentation:</strong> <a href="/api-docs">/api-docs</a></p>
            </div>
        </div>
    </body>
    </html>
  `;
  res.send(html);
});

const qtypeRouter = require('./router/qtyperoutes')
const router = require('./router/routes')
const subQuantityTypeRouter = require('./router/subQuantityTypeRoutes')
const subQuantityTypeByName = require('./router/subQuantityTypeGetByNameRouter')
const productRouter = require('./router/productroutes')
const productByNameRouter = require('./router/productbynameroutes')
const productPriceRouter = require('./router/productPriceRoutes')
const productPriceByQtypeRouter = require('./router/ppgetbyqtypeid')
const productPriceByBaseTypeRouter = require('./router/ppgetbybasetypeid')
const invoiceRouter = require('./router/ivoicerouter')
const itemsRouter = require('./router/itemsrouter')
const taxRouter = require('./router/taxrouter')
const dineRouter = require('./router/dinerouter')
const floorRouter = require('./router/floorroutes')
const chairRouter = require('./router/chairrouter')
const chairsGetByTableIdRouter = require('./router/chairsgetbytableidrouter')
const customersRouter = require('./router/customersroutes')
const getProductByCategoryRouter = require('./router/getproductbycategoryid')
const chairsRunningOrderRouter = require('./router/chairsrunningorderrouter')
const getOrderRecordByDateRouter = require('./router/getorderbydate')
const inventoryFMPRouter = require('./router/imfwprouter')
const inventoryFMRouter = require('./router/imfrouter')
const inventoryFQTRouter = require('./router/ifqtrouter')
const productPriceByProductIdRouter = require('./router/pproutesproductid')
const payByManageRouter = require('./router/paybymanagerouter')
const reserveDineRouter = require('./router/reservedinerouter')
const companyProfileRouter = require('./router/companyprofilerouter')
const employee = require('./router/employeerouter')
const User = require('./router/userRouter')
const quantityTypeNameRouter = require('./router/getQuantityTypeNameRoutes')
const getReserveDineByDateTimeRouter = require('./router/getReserveDinebyDateTimeRouter')

app.use('/getReserveDineByDateTime', getReserveDineByDateTimeRouter)
app.use('/subQuantityTypeName', subQuantityTypeByName)
app.use('/quantityType', quantityTypeNameRouter)
app.use('/User', User)
app.use('/employee', employee)
app.use('/companyProfile', companyProfileRouter)
app.use('/reserveDine', reserveDineRouter)
app.use('/payByManage', payByManageRouter)
app.use('/productPriceByProductId', productPriceByProductIdRouter)
app.use('/inventoryFoodQuantityType', inventoryFQTRouter)
app.use('/inventoryMainFood', inventoryFMRouter)
app.use('/invetoryMainFoodWithProduct', inventoryFMPRouter)
app.use('/categoryType', router)
app.use('/quantityType', qtypeRouter)
app.use('/subQuantityType', subQuantityTypeRouter)
app.use('/product', productRouter)
app.use('/productByName', productByNameRouter)
app.use('/productPrice', productPriceRouter)
app.use('/productPriceByQuantityType', productPriceByQtypeRouter)
app.use('/productPriceByBaseType', productPriceByBaseTypeRouter)
app.use('/invoice', invoiceRouter)
app.use('/tax', taxRouter)
app.use('/item', itemsRouter)
app.use('/dine', dineRouter)
app.use('/floor', floorRouter)   
app.use('/chairsGetByTableId', chairsGetByTableIdRouter)       
app.use('/chair', chairRouter)
app.use('/customers', customersRouter)
app.use('/productByCategory', getProductByCategoryRouter)
app.use('/chairsRunningOrder', chairsRunningOrderRouter)
app.use('/getOrderRecordByDate', getOrderRecordByDateRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Bylzz API Documentation'
}));

const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 Swagger UI available at: http://${config.server.host}:${PORT}/api-docs`);
});