import { Pool, ResultSetHeader } from 'mysql2/promise'; 
import Products from '../interfaces/Products';

export default class PRoductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<Products[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [products] = result;
    return products as Products[];
  }

  public async create(product: Products): Promise<Products> {
    const { name, amount } = product;
    const [newProduct] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
      [name, amount],
    );
    const { insertId } = newProduct;
    return { id: insertId, ...product };
  }
}