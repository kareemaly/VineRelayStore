import IoC from 'AppIoC';
import {
  GraphQLString,
  GraphQLID,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
  fromGlobalId,
  connectionDefinitions,
} from 'graphql-relay';

/**
 * Resolve products.
 */
export const productsResolver = (productRepository, productType) => {

  const searchProducts = (viewer, { slug, brandId, categoryId }) => {
    return productRepository.query(
      viewer,
      {
        slug,
        brandId: brandId && fromGlobalId(brandId).id,
        categoryId: categoryId && fromGlobalId(categoryId).id,
      }
    );
  }

  return {
    type: connectionDefinitions({ nodeType: productType }).connectionType,
    args: {
      // Relay search args
      ...connectionArgs,
      // Our custom search criteria goes here
      slug: { type: GraphQLString },
      brandId: { type: GraphQLID },
      categoryId: { type: GraphQLID },
    },
    resolve: (_, args, { viewer }) =>
      connectionFromPromisedArray(searchProducts(viewer, args), args),
  };
}



IoC.callable('productsResolver', [
  'productRepository',
  'productType',
], productsResolver);
