import { Request, Response } from 'express';
import UsersService from '../services/Users';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    
    const response = {
      token: 'abcdefghijkaasfsddhfjghkutytrerefdsdffgdhgf.gjfgsfst.stsfafadfa',
    };
    await this.usersService.create(user);
    return res.status(201).json(response);
  };
}