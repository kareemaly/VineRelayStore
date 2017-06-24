import IoC from 'AppIoC';
import ValidationError from  'server/errors/ValidationError';
import ForbiddenError from  'server/errors/ForbiddenError';
import ModelNotFoundError from  'server/errors/ModelNotFoundError';

export default class BrandRepository {
  constructor(brandModel) {
    this.brandModel = brandModel;
  }

  /**
   * Query brands
   * @param  {User} viewer
   * @param  {Object} inputs
   * @return {Promise<Brand[]>}
   */
  async query(viewer, inputs) {
    const query = this.brandModel.find();

    if(inputs.slug) {
      query.where('slug', inputs.slug);
    }

    return query.exec();
  }

  /**
   * Find brand by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise<Brand>}
   */
  async findById(viewer, id) {
    return this.brandModel.findById(id).exec();
  }

  /**
   * Create brand
   * @param  {User} viewer
   * @param  {Object} data
   * @return {Promise<Brand>}
   * @throws {ForbiddenError} If viewer is not an admin
   */
  async create(viewer, data) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    return this.brandModel.create({
      ...data,
      creator: viewer._id,
    });
  }

  /**
   * Update brand attributes
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @param  {Object} data
   * @return {Promise<Brand>}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If brand doesnt exist
   */
  async update(viewer, id, data) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const brand = await this.brandModel.findById(id);

    if(! brand) {
      throw new ModelNotFoundError("The brand you are requesting to update doesnt exist");
    }

    return brand.set(data).save();
  }

  /**
   * Remove brand by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If brand doesnt exist
   */
  async remove(viewer, id) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const brand = await this.brandModel.findById(id);

    if(! brand) {
      throw new ModelNotFoundError("The brand you are requesting to remove doesnt exist");
    }

    return await brand.remove();
  }
}

IoC.singleton('brandRepository', [
  'brandModel',
], BrandRepository);
