import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const orderItemModel = (mongoose) => {
  /**
   * OrderItem schema definition
   * @type {Schema}
   */
  const orderItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    price: { type: Number },
    quantity: { type: Number },
    // Order
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  });

  /**
   * Get product
   * @return {Product}
   */
  orderItemSchema.method('getProduct', async function() {
    await this.populate('product').execPopulate();
    return this.product;
  });

  /**
   * Get order
   * @return {Product}
   */
  orderItemSchema.method('getOrder', async function() {
    await this.populate('order').execPopulate();
    return this.order;
  });

  return mongoose.model('OrderItem', orderItemSchema);
}

IoC.callable('orderItemModel', ['connection'], orderItemModel);
