import { Request, Response } from 'express';
import { queries, connMSSQL, sql } from '../db';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await (await connMSSQL())
      .request()
      .query(queries.getAllProducts);

    res.send({ msg: 'Get all products', products });
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const getTotalProducts = async (req: Request, res: Response) => {
  try {
    const result = await (await connMSSQL())
      .request()
      .query(queries.getTotalProducts);

    res.status(200).send({ count: result.recordset[0][''] });
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (!quantity) quantity = 0;

  if (name == null || description == null) {
    return res.status(400).send({ msg: 'Bad Request. Please Fill all fields' });
  }

  try {
    await (await connMSSQL())
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .query(queries.createProduct);

    res.send({
      msg: 'Create new product',
      product: { name, description, quantity }
    });
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await (await connMSSQL())
    .request()
    .input('id', id)
    .query(queries.getProductById);

  res.send({ msg: `Get Product by id=${id}`, product: result.recordset[0] });
};

export const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await (await connMSSQL())
      .request()
      .input('id', id)
      .query(queries.deleteProductById);

    res.status(204).send({ msg: `Delete Product by id=${id}` });
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const { name, description, quantity } = req.body;
  const { id } = req.params;

  if (name == null || description == null) {
    return res.status(400).send({ msg: 'Bad Request. Please Fill all fields' });
  }

  try {
    await (await connMSSQL())
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .input('id', sql.Int, id)
      .query(queries.updateProductById);

    res.status(201).send({ msg: `Update Product by id=${id}` });
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
