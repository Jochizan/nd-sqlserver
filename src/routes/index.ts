import productsRoutes from './product.routes';
import { Router } from 'express';

const router = Router();

router.use('/api/v1', productsRoutes);

export default router;