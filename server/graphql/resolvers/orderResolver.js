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
 * Resolve orders.
 */
export const orderResolver = (orderRepository, ordersConnectionType) => ({
  type: ordersConnectionType,
  args: {
    // Relay search args
    ...connectionArgs,
    // Custom search criteria goes here
  },
  resolve: (viewer, args) =>
    connectionFromPromisedArray(orderRepository.query(viewer), args),
});



IoC.callable('orderResolver', [
  'orderRepository',
  'ordersConnectionType',
], orderResolver);
