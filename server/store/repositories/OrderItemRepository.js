import IoC from 'AppIoC';
import ValidationError from  'server/errors/ValidationError';
import ForbiddenError from  'server/errors/ForbiddenError';
import ModelNotFoundError from  'server/errors/ModelNotFoundError';

export default class OrderItemRepository {
  constructor(orderItemModel) {
    this.orderItemModel = orderItemModel;
  }

  /**
   * Query orderItems
   * @param  {User} viewer
   * @param  {Object} inputs
   * @return {Promise<OrderItem[]>}
   * @throws {ForbiddenError} If viewer is not an admin
   */
  async query(viewer, inputs) {
    if(!viewer.isAdmin()) {
      return Promise.resolve([]);
    }

    const query = this.orderItemModel.find();
    return query.exec();
  }

  /**
   * Find orderItem by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise<OrderItem>}
   */
  async findById(viewer, id) {
    return this.orderItemModel.findById(id).exec();
  }

  async findByOrder(order) {
    return this.orderItemModel.find({ order: order._id });
  }

  /**
   * Create orderItem
   * @param  {User} viewer
   * @param  {object} order
   * @param  {object[]} items
   * @return {Promise<OrderItem[]>}
   */
  async createAll(viewer, order, items) {
    return this.orderItemModel.create(items.map((item) => ({
      ...item,
      order: order._id,
    })));
  }

  /**
   * Update orderItem attributes
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @param  {Object} data
   * @return {Promise<OrderItem>}
   * @throws {Error}
   */
  async update(viewer, id, data) {
    throw new Error('Not implemented');
  }

  /**
   * Remove orderItem by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If orderItem doesnt exist
   */
  async remove(viewer, id) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const orderItem = await this.orderItemModel.findById(id);

    if(! orderItem) {
      throw new ModelNotFoundError("The orderItem you are requesting to remove doesnt exist");
    }

    return await orderItem.remove();
  }
}

IoC.singleton('orderItemRepository', [
  'orderItemModel',
], OrderItemRepository);
