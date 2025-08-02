export type OrderStatus = 'PENDING' | 'PROCESSING' | 'FULFILLED' | 'FAILED';

export interface Order {
  orderId: string;
  userId: string;
  status: OrderStatus;
  items: { sku: string; qty: number }[];
  fulfillmentChannel: 'KITCHEN' | 'DARK_STORE' | 'PARTNER';
  createdAt: string;
  updatedAt: string;
}