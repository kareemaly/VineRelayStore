import IoC from 'AppIoC';
import {
  GraphQLString,
  GraphQLID,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
  connectionDefinitions,
} from 'graphql-relay';

/**
 * Resolve orders.
 */
export const ordersResolver = (orderRepository, orderType) => ({
  type: connectionDefinitions({ nodeType: orderType }).connectionType,
  args: {
    // Relay search args
    ...connectionArgs,
    // Custom search criteria goes here
  },
  resolve: (_, args, { viewer }) =>
    connectionFromPromisedArray(orderRepository.query(viewer), args)
});



IoC.callable('ordersResolver', [
  'orderRepository',
  'orderType',
], ordersResolver);
