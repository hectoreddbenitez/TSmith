import express from 'express';
import ProductsController from './controllers/Products';
import amountValidator from './middlewares/amountValidator';
import nameValidator from './middlewares/nameValidator';

const app = express();

app.use(express.json());

const productsController = new ProductsController();

app.get('/products', productsController.findAll);
app.post('/products', nameValidator, amountValidator, productsController.create);

export default app;
