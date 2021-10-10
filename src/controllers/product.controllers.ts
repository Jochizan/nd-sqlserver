import { Request, Response } from 'express';
import connMMSQL, { sql } from '../db/connections';

export const getProducts = async (req: Request, res: Response) => {
  const products = await (await connMMSQL())
    .request()
    .query('SELECT * FROM Products');

  console.log(products);

  res.send({ msg: 'Get all products', products });
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (!quantity) quantity = 0;

  if (name == null || description == null) {
    return res.status(400).send({ msg: 'Bad Request. Please Fill all fields' });
  }

  const product = await (await connMMSQL())
    .request()
    .input('name', sql.VarChar, name)
    .input('description', sql.VarChar, description)
    .query(
      'INSERT INTO Products (name, description) VALUES (@name, @description)'
    );

  res.send({ msg: 'Create new product', product });
};
