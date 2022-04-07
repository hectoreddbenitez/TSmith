import { Pool, RowDataPacket } from 'mysql2/promise'; 
import Orders from '../interfaces/Orders';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<Orders[]> {
    const result = await this
      .connection.execute<RowDataPacket[]>(
      `SELECT DISTINCT 
        O.id, O.userId, JSON_ARRAYAGG(P.id) AS products
      FROM 
        Trybesmith.Orders AS O 
      INNER JOIN Trybesmith.Products AS P 
      ON O.id = P.orderId
      GROUP BY O.id ORDER BY O.userId;`,
    );
    const [orders] = result;
    return orders as Orders[];
  }
}