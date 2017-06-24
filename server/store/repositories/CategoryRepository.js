import IoC from 'AppIoC';
import ValidationError from  'server/errors/ValidationError';
import ForbiddenError from  'server/errors/ForbiddenError';
import ModelNotFoundError from  'server/errors/ModelNotFoundError';

export default class CategoryRepository {
  constructor(categoryModel) {
    this.categoryModel = categoryModel;
  }

  /**
   * Query categories
   * @param  {User} viewer
   * @param  {Object} inputs
   * @return {Promise<Category[]>}
   */
  async query(viewer, inputs) {
    const query = this.categoryModel.find();

    if(inputs.slug) {
      query.where('slug', inputs.slug);
    }

    return query.exec();
  }

  /**
   * Find category by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise<Category>}
   */
  async findById(viewer, id) {
    return this.categoryModel.findById(id).exec();
  }

  /**
   * Create category
   * @param  {User} viewer
   * @param  {Object} data
   * @return {Promise<Category>}
   * @throws {ForbiddenError} If viewer is not an admin
   */
  async create(viewer, data) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    return this.categoryModel.create({
      ...data,
      creator: viewer._id,
    });
  }

  /**
   * Update category attributes
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @param  {Object} data
   * @return {Promise<Category>}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If category doesnt exist
   */
  async update(viewer, id, data) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const category = await this.categoryModel.findById(id);

    if(! category) {
      throw new ModelNotFoundError("The category you are requesting to update doesnt exist");
    }

    return category.set(data).save();
  }

  /**
   * Remove category by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If category doesnt exist
   */
  async remove(viewer, id) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const category = await this.categoryModel.findById(id);

    if(! category) {
      throw new ModelNotFoundError("The category you are requesting to remove doesnt exist");
    }

    return await category.remove();
  }
}

IoC.singleton('categoryRepository', [
  'categoryModel',
], CategoryRepository);
