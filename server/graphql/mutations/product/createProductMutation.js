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
 * Create product mutation.
 */
export const createProductMutation = (productRepository, productType) => mutationWithClientMutationId({
  name: 'CreateProduct',
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    brandId: { type: new GraphQLNonNull(GraphQLString) },
    categoryId: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    product: { type: productType },
  },
  mutateAndGetPayload: async ({ brandId, categoryId, ...attrs }, { viewer }) => {
    // Transform category and brand id
    const { id: category } = fromGlobalId(categoryId);
    const { id: brand } = fromGlobalId(brandId);
    const product = await productRepository.create(viewer, {
      ...attrs,
      category,
      brand,
    });
    return { product };
  }
});

IoC.callable('createProductMutation', [
  'productRepository',
  'productType',
], createProductMutation);
