import { Request, Response, NextFunction } from 'express';
import Products from '../interfaces/Products';

const nameValidator = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body as Products;
  if (name === undefined) return res.status(400).json({ error: 'Name is required' });
  if (typeof name !== 'string') return res.status(422).json({ error: 'Name must be a string' });
  if (name.length < 3) {
    return res.status(422)
      .json({ error: 'Name must be longer than 2 characters' }); 
  }
  next();
};

export default nameValidator;