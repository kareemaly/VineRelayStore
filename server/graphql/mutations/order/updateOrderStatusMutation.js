import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  mutationWithClientMutationId,
  fromGlobalId,
} from 'graphql-relay';

/**
 * Update order mutation.
 */
export const updateOrderStatusMutation = (orderRepository, orderType) => mutationWithClientMutationId({
  name: 'UpdateOrderStatus',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    order: { type: new GraphQLNonNull(orderType) },
  },
  mutateAndGetPayload: async ({ id, status }, { viewer }) => {
    const { id: orderId } = fromGlobalId(id);
    const order = await orderRepository.updateStatus(viewer, orderId, status);
    return { order };
  }
});

IoC.callable('updateOrderStatusMutation', [
  'orderRepository',
  'orderType',
], updateOrderStatusMutation);
