import IoC from 'AppIoC';
import {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  fromGlobalId,
  mutationWithClientMutationId,
} from 'graphql-relay';

/**
 * Remove order mutation.
 */
export const removeOrderMutation = (orderRepository) => mutationWithClientMutationId({
  name: 'RemoveOrder',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deleted: { type: GraphQLBoolean },
    deletedId: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ id }, { viewer }) => {
    const { id: orderId } = fromGlobalId(id);
    const result = await orderRepository.remove(viewer, orderId);
    return { deletedId: id, deleted: true };
  }
});

IoC.callable('removeOrderMutation', [
  'orderRepository'
], removeOrderMutation);
