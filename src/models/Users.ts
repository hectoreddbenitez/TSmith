import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/Users';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: Users): Promise<boolean> {
    const { username, classe, level, password } = user;
    console.log(user);

    await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return true;
  }
}