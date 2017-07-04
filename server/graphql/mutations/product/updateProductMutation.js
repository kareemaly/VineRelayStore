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
 * Update product mutation.
 */
export const updateProductMutation = (productRepository, productType) => mutationWithClientMutationId({
  name: 'UpdateProduct',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    product: { type: productType },
  },
  mutateAndGetPayload: async ({ id, ...attrs }, { viewer }) => {
    const { id: productId } = fromGlobalId(id);
    const product = await productRepository.update(viewer, productId, attrs);
    return { product };
  }
});

IoC.callable('updateProductMutation', [
  'productRepository',
  'productType',
], updateProductMutation);
