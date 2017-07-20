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
 * Resolve products.
 */
export const productResolver = (productRepository, productsConnectionType) => {

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
    type: productsConnectionType,
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



IoC.callable('productResolver', [
  'productRepository',
  'productsConnectionType',
], productResolver);
