import IoC from 'AppIoC';
import {
  GraphQLString,
  GraphQLID,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
  fromGlobalId,
} from 'graphql-relay';

/**
 * Resolve order items.
 */
export const orderItemResolver = (orderItemRepository, orderItemsConnectionType) => ({
  type: orderItemsConnectionType,
  args: {
    // Relay search args
    ...connectionArgs,
    // Custom search criteria goes here
  },
  resolve: (_, args, { viewer }) =>
    connectionFromPromisedArray(orderItemRepository.query(viewer), args),
});



IoC.callable('orderItemResolver', [
  'orderItemRepository',
  'orderItemsConnectionType',
], orderItemResolver);
