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
 * Remove product mutation.
 */
export const removeProductMutation = (productRepository) => mutationWithClientMutationId({
  name: 'RemoveProduct',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deleted: { type: GraphQLBoolean },
    id: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ id }, { viewer }) => {
    const { id: productId } = fromGlobalId(id);
    const result = await productRepository.remove(viewer, productId);
    return { id, deleted: true };
  }
});

IoC.callable('removeProductMutation', [
  'productRepository'
], removeProductMutation);
