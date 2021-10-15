import { Router } from 'express';
import {
  getProducts,
  createProduct,
  getProductById,
  getTotalProducts,
  deleteProductById,
  updateProductById
} from '../controllers/product.controllers';

const router = Router();

router.get('/products', getProducts);

router.get('/product/:id', getProductById);

router.get('/products/count', getTotalProducts);

router.post('/products', createProduct);

router.delete('/product/:id', deleteProductById);

router.put('/product/:id', updateProductById);

export default router;
