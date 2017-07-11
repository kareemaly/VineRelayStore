import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const orderModel = (mongoose) => {
  /**
   * Order schema definition
   * @type {Schema}
   */
  const orderSchema = new Schema({
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

  return mongoose.model('Order', orderSchema);
}

IoC.callable('orderModel', [
  'connection',
], orderModel);
