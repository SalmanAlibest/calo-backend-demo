import { Request, Response } from 'express';
import * as OrderService from '../services/order.service';
import { successResponse, errorResponse } from '../utils/response';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderService.createOrder(req.body);
    return successResponse(res, order, 201);
  } catch (err) {
    return errorResponse(res, err);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderService.updateOrder(req.params.id, req.body);
    return successResponse(res, order);
  } catch (err) {
    return errorResponse(res, err);
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    return successResponse(res, order);
  } catch (err) {
    return errorResponse(res, err);
  }
};