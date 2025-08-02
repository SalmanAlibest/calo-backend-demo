import express from 'express';
import * as OrderController from '../controllers/order.controller';
const router = express.Router();
router.post('/orders', OrderController.createOrder);
router.put('/orders/:id', OrderController.updateOrder);
router.get('/orders/:id', OrderController.getOrder);
export default router;