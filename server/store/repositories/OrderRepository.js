import IoC from 'AppIoC';
import ValidationError from  'server/errors/ValidationError';
import ForbiddenError from  'server/errors/ForbiddenError';
import ModelNotFoundError from  'server/errors/ModelNotFoundError';

export default class OrderRepository {
  constructor(orderModel) {
    this.orderModel = orderModel;
  }

  /**
   * Query orders
   * @param  {User} viewer
   * @param  {Object} inputs
   * @return {Promise<Order[]>}
   * @throws {ForbiddenError} If viewer is not an admin
   */
  async query(viewer, inputs = {}) {
    if(!viewer.isAdmin()) {
      return Promise.resolve([]);
    }

    const query = this.orderModel.find();
    return query.exec();
  }

  /**
   * Find order by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise<Order>}
   */
  async findById(viewer, id) {
    return this.orderModel.findById(id).exec();
  }

  /**
   * Create order
   * @param  {User} viewer
   * @param  {Object} data
   * @return {Promise<Order>}
   */
  async create(viewer, data) {
    return this.orderModel.create(data);
  }

  /**
   * Update order attributes
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @param  {Object} data
   * @return {Promise<Order>}
   * @throws {Error}
   */
  async update(viewer, id, data) {
    throw new Error('Not implemented');
  }

  /**
   * Update order status
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @param  {string} status
   * @return {Promise<Order>}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If order doesnt exist
   */
  async updateStatus(viewer, id, status) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    // Find the order
    const order = await this.orderModel.findById(id);

    if(!order) {
      throw new ModelNotFoundError("The order you are trying to update doesnt exist");
    }

    // Update order status
    order.status = status;

    return order.save();
  }

  /**
   * Remove order by id
   * @param  {User} viewer
   * @param  {ObjectId} id
   * @return {Promise}
   * @throws {ForbiddenError} If viewer is not an admin
   * @throws {ModelNotFoundError} If order doesnt exist
   */
  async remove(viewer, id) {
    if(!viewer.isAdmin()) {
      throw new ForbiddenError("You are not authorized to make this action.");
    }

    const order = await this.orderModel.findById(id);

    if(! order) {
      throw new ModelNotFoundError("The order you are requesting to remove doesnt exist");
    }

    return order.remove();
  }
}

IoC.singleton('orderRepository', [
  'orderModel',
], OrderRepository);
