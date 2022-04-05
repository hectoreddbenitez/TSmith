import Products from '../interfaces/Products';
import ProductsModel from '../models/Products';
import connection from '../models/connection';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: Products): Promise<Products> {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}