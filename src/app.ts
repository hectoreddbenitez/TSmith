import express from 'express';
import OrdersController from './controllers/Orders';
import ProductsController from './controllers/Products';
import UsersController from './controllers/Users';
import amountValidator from './middlewares/amountValidator';
import nameValidator from './middlewares/nameValidator';
import userMiddleare from './middlewares/userMiddleare';

const app = express();

app.use(express.json());

const productsController = new ProductsController();
const ordersController = new OrdersController();
const usersController = new UsersController();

app.get('/orders', ordersController.findAll);
app.get('/products', productsController.findAll);
app.post('/products', nameValidator, amountValidator, productsController.create);
app.post('/users', userMiddleare, usersController.create);

export default app;
