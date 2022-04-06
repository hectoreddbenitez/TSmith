import { Request, Response } from 'express';
import OrdersService from '../services/Orders';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public findAll = async (_req: Request, res: Response) => {
    try {
      const order = await this.ordersService.findAll();
      res.status(200).json(order);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  };
}