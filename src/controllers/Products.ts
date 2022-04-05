import { Request, Response } from 'express';
import ProductsService from '../services/Products';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public findAll = async (_req: Request, res: Response) => {
    try {
      const products = await this.productsService.findAll();
      res.status(200).json(products);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  };
  
  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const item = await this.productsService.create(product);
    const newProduct = {
      item,
    };
    return res.status(201).json(newProduct);
  };
}