import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
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
    slug: { type: GraphQLString },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    mainImage: { type: GraphQLString },
    brandId: { type: new GraphQLNonNull(GraphQLString) },
    categoryId: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    product: { type: productType },
  },
  mutateAndGetPayload: async ({ id, categoryId, brandId, ...attrs }, { viewer }) => {
    const { id: productId } = fromGlobalId(id);
    // Transform category and brand relay ids
    const { id: category } = fromGlobalId(categoryId);
    const { id: brand } = fromGlobalId(brandId);
    const product = await productRepository.update(viewer, productId, {
      ...attrs,
      category,
      brand,
    });
    return { product };
  }
});

IoC.callable('updateProductMutation', [
  'productRepository',
  'productType',
], updateProductMutation);
