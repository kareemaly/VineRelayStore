import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const productModel = (mongoose, slugify) => {
  /**
   * Product schema definition
   * @type {Schema}
   */
  const productSchema = new Schema({
    // Product name
    name: {type: String, required: true},
    // Product slug (used in url)
    slug: {type: String, required: true, unique: true},
    // Product price
    price: {type: Number},
    // Product main image src
    mainImage: {type: String},
    // Product brand
    brand: {type: Schema.Types.ObjectId, ref: 'Brand', required:true},
    // Product category
    category: {type: Schema.Types.ObjectId, ref: 'Category', required:true},
    // Product creator
    creator: {type: Schema.Types.ObjectId, ref: 'User', required:true},
  });

  /**
   * Get brand
   * @return {Brand}
   */
  productSchema.method('getBrand', async function() {
    await this.populate('brand').execPopulate();
    return this.brand;
  });

  /**
   * Get category
   * @return {Category}
   */
  productSchema.method('getCategory', async function() {
    await this.populate('category').execPopulate();
    return this.category;
  });

  /**
   * Get creator
   * @return {User}
   */
  productSchema.method('getCreator', async function() {
    await this.populate('creator').execPopulate();
    return this.creator;
  });

  /**
   * Generate slug if user didnt input it
   */
  productSchema.pre('validate', async function(next) {
    if(! this.slug) {
      this.slug = slugify(this.name);
    }
    next();
  });

  productSchema.plugin(uniqueValidator);

  return mongoose.model('Product', productSchema);
}

IoC.callable('productModel', [
  'connection',
  'slugify',
], productModel);
