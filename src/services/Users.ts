import Users from '../interfaces/Users';
import connection from '../models/connection';
import UsersModel from '../models/Users';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: Users): Promise<Users> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}