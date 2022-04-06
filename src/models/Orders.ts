import { Pool } from 'mysql2/promise'; 
import Orders from '../interfaces/Orders';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<Orders[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    const [orders] = result;
    return orders as Orders[];
  }
}