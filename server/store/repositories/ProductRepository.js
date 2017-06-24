import IoC from 'AppIoC';
import ValidationError from  'server/errors/ValidationError';
import ForbiddenError from  'server/errors/ForbiddenError';
import ModelNotFoundError from  'server/errors/ModelNotFoundError';

export default class ProductRepository {
  constructor(productModel) {
    this.productModel = productModel;
  }

  /**
   * Query products
   * @param  {User} viewer
   * @param  {Object} inputs
   * @return {Promise<Product[]>}
   */
  async query(viewer, inputs) {
    const query = this.productModel.find();

    if(inputs.slug) {
      query.where('slug', inputs.slug);
    }

    return query.exec();
  }

  /**
   * Find product by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise<Product>}
   */
  async findById(viewer, id) {
    return this.productModel.findById(id).exec();
  }

  /**
   * Create product
   * @param  {User} viewer
   * @param  {Object} data
   * @return {Promise<Product>}
   * @throws {ForbiddenError} If viewer is not an admin
   */
  async create(viewer, data) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    return this.productModel.create({
      ...data,
      creator: viewer._id,
    });
  }

  /**
   * Update product attributes
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @param  {Object} data
   * @return {Promise<Product>}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If product doesnt exist
   */
  async update(viewer, id, data) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const product = await this.productModel.findById(id);

    if(! product) {
      throw new ModelNotFoundError("The product you are requesting to update doesnt exist");
    }

    return product.set(data).save();
  }

  /**
   * Remove product by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If product doesnt exist
   */
  async remove(viewer, id) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const product = await this.productModel.findById(id);

    if(! product) {
      throw new ModelNotFoundError("The product you are requesting to remove doesnt exist");
    }

    return await product.remove();
  }
}

IoC.singleton('productRepository', [
  'productModel',
], ProductRepository);
