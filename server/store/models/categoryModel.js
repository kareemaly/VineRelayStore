import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const categoryModel = (mongoose, slugify) => {
  /**
   * Category schema definition
   * @type {Schema}
   */
  const categorySchema = new Schema({
    // Category name
    name: {type: String, required: true},
    // Category description
    description: {type: String},
    // Category slug (used in url)
    slug: {type: String, required: true, unique: true},
    // Category cover image src
    coverImage: {type: String},
    // Category logo image src
    logoImage: {type: String},
    // Category creator
    creator: {type: Schema.Types.ObjectId, ref: 'User', required:true},
  });

  /**
   * Get creator
   * @return {User}
   */
  categorySchema.method('getCreator', async function() {
    await this.populate('creator').execPopulate();
    return this.creator;
  });

  /**
   * Generate slug if user didnt input it
   */
  categorySchema.pre('validate', async function(next) {
    if(! this.slug) {
      this.slug = slugify(this.name);
    }
    next();
  });

  categorySchema.plugin(uniqueValidator);

  return mongoose.model('Category', categorySchema);
}

IoC.callable('categoryModel', ['connection', 'slugify'], categoryModel);
