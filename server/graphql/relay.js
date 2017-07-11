import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import IoC from 'AppIoC';

export const relayNodeDefinitions = (
  userRepository,
  brandRepository,
  categoryRepository,
  productRepository,
  orderRepository,
  orderItemRepository
) => {

  const resolveGlobalId = (globalId, { viewer }) => {
    const { type, id } = fromGlobalId(globalId);

    switch(type) {
      case 'User':
        return userRepository.findById(viewer, id);
      case 'Brand':
        return brandRepository.findById(viewer, id);
      case 'Category':
        return categoryRepository.findById(viewer, id);
      case 'Product':
        return productRepository.findById(viewer, id);
      case 'Order':
        return orderRepository.findById(viewer, id);
      case 'OrderItem':
        return orderItemRepository.findById(viewer, id);
    }
  }

  /**
   * We get the node interface and field from the Relay library.
   *
   * The first method defines the way we resolve an ID to its object.
   * The second defines the way we resolve an object to its GraphQL type.
   */
  return nodeDefinitions(
    resolveGlobalId
  );
};

IoC.callable('relayNodeDefinitions', [
  'userRepository',
  'brandRepository',
  'categoryRepository',
  'productRepository',
  'orderRepository',
  'orderItemRepository',
], relayNodeDefinitions);

IoC.callable('nodeInterface', [
  'relayNodeDefinitions'
], ({ nodeInterface }) => nodeInterface);

IoC.callable('nodeField', [
  'relayNodeDefinitions'
], ({ nodeField }) => nodeField);


