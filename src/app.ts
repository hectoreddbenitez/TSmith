import express from 'express';
import ProductsController from './controllers/Products';

const app = express();

app.use(express.json());

const productsController = new ProductsController();

app.get('/products', productsController.findAll);
app.post('/products', productsController.create);

export default app;
