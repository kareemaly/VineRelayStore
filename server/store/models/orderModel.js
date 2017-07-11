import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const generateUniqueOrderNumber = async (orderModel) => {
  let uniqueId = Math.random().toString(36).substr(2, 6).toUpperCase();

  const result = await orderModel.find({ orderNumber: uniqueId });

  if(result.length > 0) {
    return generateUniqueOrderNumber(orderModel);
  }

  return uniqueId;
}

export const orderModel = (mongoose) => {
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
    phoneNumber: { type: String },
  });

  orderSchema.pre("validate", async function(next) {
    try {
      if (this.orderNumber) {
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
