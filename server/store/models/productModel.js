import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const productModel = (mongoose) => {
  /**
   * Product schema definition
   * @type {Schema}
   */
  const productSchema = new Schema({
    // Product name
    name: {type: String, required: true},
    // Product slug (used in url)
    slug: {type: String, required: true, unique: true},
    // Product creator
    creator: {type: Schema.Types.ObjectId, ref: 'User', required:true},
  });

  /**
   * Get creator
   * @return {User}
   */
  productSchema.method('getCreator', async function() {
    await this.populate('creator').execPopulate();
    return this.creator;
  });

  productSchema.plugin(uniqueValidator);

  return mongoose.model('Product', productSchema);
}

IoC.callable('productModel', ['connection'], productModel);
