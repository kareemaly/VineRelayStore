import IoC from 'AppIoC';
import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const brandModel = (mongoose, slugify) => {
  /**
   * Brand schema definition
   * @type {Schema}
   */
  const brandSchema = new Schema({
    // Brand name
    name: {type: String, required: true},
    // Brand description
    description: {type: String},
    // Brand slug (used in url)
    slug: {type: String, required: true, unique: true},
    // Brand cover image src
    coverImage: {type: String},
    // Brand logo image src
    logoImage: {type: String},
    // Brand creator
    creator: {type: Schema.Types.ObjectId, ref: 'User', required:true},
  });

  /**
   * Get creator
   * @return {User}
   */
  brandSchema.method('getCreator', async function() {
    await this.populate('creator').execPopulate();
    return this.creator;
  });

  /**
   * Generate slug if user didnt input it
   */
  brandSchema.pre('validate', async function(next) {
    if(! this.slug) {
      this.slug = slugify(this.name);
    }
    next();
  });

  brandSchema.plugin(uniqueValidator);

  return mongoose.model('Brand', brandSchema);
}

IoC.callable('brandModel', ['connection', 'slugify'], brandModel);
