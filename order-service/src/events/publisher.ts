import AWS from 'aws-sdk';
import { Order } from '../models/order.model';

const sns = new AWS.SNS({ region: 'us-east-1' });

export const publishOrderEvent = async (order: Order) => {
  await sns.publish({
    TopicArn: process.env.ORDER_EVENTS_TOPIC,
    Message: JSON.stringify(order),
  }).promise();
};