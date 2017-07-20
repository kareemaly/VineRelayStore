import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import {
  UNCONFIRMED,
  CONFIRMED,
  OUT_FOR_DELIVERY,
  DELIVERED,
  FAILED,
} from 'server/store/constants/orderStatuses';

const generateUniqueOrderNumber = async (orderModel) => {
  let uniqueId = Math.random().toString(36).substr(2, 6).toUpperCase();

  const result = await orderModel.find({ orderNumber: uniqueId });

  if(result.length > 0) {
    return generateUniqueOrderNumber(orderModel);
  }

  return uniqueId;
}

export const orderModel = (mongoose) => {
  const orderStatuses = [
    UNCONFIRMED,
    CONFIRMED,
    OUT_FOR_DELIVERY,
    DELIVERED,
    FAILED,
  ];

  /**
   * Order schema definition
   * @type {Schema}
   */
  const orderSchema = new Schema({
    orderNumber: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    // Order status
    status: {type: String, enum: orderStatuses, default: UNCONFIRMED},
  });

  /**
   * Get readable status text for end users
   * @return {string}
   */
  orderSchema.method('getReadableStatusText', function() {
    switch(this.status) {
      case CONFIRMED:
        return 'Confirmed';
      case OUT_FOR_DELIVERY:
        return 'Out for delivery';
      case DELIVERED:
        return 'Delivered';
      case FAILED:
        return 'Failed';
      default:
        return 'Unconfirmed';
    }
  });

  orderSchema.pre("validate", async function(next) {
    try {
      if (! this.orderNumber) {
        // Generate unique order number
        this.orderNumber = await generateUniqueOrderNumber(this.constructor);
      }
      next();
    } catch(err) {
      next(err);
    }
  });

  return mongoose.model('Order', orderSchema);
}

IoC.callable('orderModel', [
  'connection',
], orderModel);
