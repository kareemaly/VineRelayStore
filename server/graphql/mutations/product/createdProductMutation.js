import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  mutationWithClientMutationId,
} from 'graphql-relay';

/**
 * Create product mutation.
 */
export const createProductMutation = (productRepository, productType) => mutationWithClientMutationId({
  name: 'CreateProduct',
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    product: { type: productType },
  },
  mutateAndGetPayload: async (attrs, { viewer }) => {
    const product = await productRepository.create(viewer, attrs);
    return { product };
  }
});

IoC.callable('createProductMutation', [
  'productRepository',
  'productType',
], createProductMutation);
