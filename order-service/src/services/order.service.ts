import { v4 as uuidv4 } from 'uuid';
import { Order } from '../models/order.model';
import * as Publisher from '../events/publisher';

const orders: Map<string, Order> = new Map();

export const createOrder = async (data: Partial<Order>): Promise<Order> => {
  const order: Order = {
    orderId: uuidv4(),
    userId: data.userId!,
    status: 'PENDING',
    items: data.items!,
    fulfillmentChannel: 'KITCHEN',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  orders.set(order.orderId, order);
  await Publisher.publishOrderEvent(order);
  return order;
};

export const updateOrder = async (id: string, updates: Partial<Order>) => {
  const order = orders.get(id);
  if (!order) throw new Error('Order not found');
  const updated = { ...order, ...updates, updatedAt: new Date().toISOString() };
  orders.set(id, updated);
  await Publisher.publishOrderEvent(updated);
  return updated;
};

export const getOrderById = async (id: string) => {
  const order = orders.get(id);
  if (!order) throw new Error('Order not found');
  return order;
};