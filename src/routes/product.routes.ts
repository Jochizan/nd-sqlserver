import { Router } from "express";
import { createProduct, getProducts } from "../controllers/product.controllers";

const router = Router();

router.get('/products', getProducts)

router.get('/products/:id', getProducts)

router.post('/products', createProduct)

router.delete('/products', getProducts)

router.put('/products', getProducts)

export default router;