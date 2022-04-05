import { Request, Response } from 'express';
import ProductsService from '../services/Products';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}
  
  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const item = await this.productsService.create(product);
    const newProduct = {
      item,
    };
    return res.status(201).json(newProduct);
  };
}