import IoC from 'AppIoC';

export default class BasicCheckoutHandler {
  constructor(orderRepository, orderItemRepository) {
    this.orderRepository = orderRepository;
    this.orderItemRepository = orderItemRepository;
  }

  /**
   * Create order
   * @param  {User} viewer
   * @param  {object} orderDetails
   * @param  {object[]} items
   * @return {Promise<Order>}
   */
  async run(viewer, orderDetails, items) {
    // Create the order
    const order = await this.orderRepository.create(viewer, orderDetails);
    // Create order items
    const orderItems = await this.orderItemRepository.createAll(viewer, order, items);
    // Return order
    return order;
  }
}

IoC.singleton('basicCheckoutHandler', [
  'orderRepository',
  'orderItemRepository',
], BasicCheckoutHandler);
