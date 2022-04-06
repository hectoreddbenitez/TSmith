import { Request, Response, NextFunction } from 'express';
import Products from '../interfaces/Products';

const amountValidator = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body as Products;
  if (amount === undefined) return res.status(400).json({ error: 'Amount is required' });
  if (typeof amount !== 'string') return res.status(422).json({ error: 'Amount must be a string' });
  if (amount.length < 3) {
    return res.status(422)
      .json({ error: 'Amount must be longer than 2 characters' }); 
  }
  next();
};

export default amountValidator;