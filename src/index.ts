import app from './app';
import ProductsController from './controllers/Products';

const PORT = process.env.PORT || 3000;

const productsController = new ProductsController();

app.post('/products', productsController.create);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
