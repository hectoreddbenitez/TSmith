import Orders from '../interfaces/Orders';
import OrdersModels from '../models/Orders';
import connection from '../models/connection';

export default class OrdersService {
  public model: OrdersModels;

  constructor() {
    this.model = new OrdersModels(connection);
  }

  public async findAll(): Promise<Orders[]> {
    const orders = await this.model.findAll();
    return orders;
  }
}
