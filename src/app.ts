import express from 'express';
import OrdersController from './controllers/Orders';
import ProductsController from './controllers/Products';
import amountValidator from './middlewares/amountValidator';
import nameValidator from './middlewares/nameValidator';

const app = express();

app.use(express.json());

const productsController = new ProductsController();
const ordersController = new OrdersController();

app.get('/orders', ordersController.findAll);
app.get('/products', productsController.findAll);
app.post('/products', nameValidator, amountValidator, productsController.create);

export default app;
