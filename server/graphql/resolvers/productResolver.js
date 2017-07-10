import IoC from 'AppIoC';
import {
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
} from 'graphql-relay';

/**
 * Resolve products.
 */
export const productResolver = (productRepository, productsConnectionType) => ({
  type: productsConnectionType,
  args: {
    // Relay search args
    ...connectionArgs,
    // Our custom search criteria goes here
    slug: { type: GraphQLString },
    brand: { type: GraphQLString },
    category: { type: GraphQLString },
  },
  resolve: (viewer, { slug, brand, category, ...args }) => connectionFromPromisedArray(
    productRepository.query(viewer, { slug, brand, category }),
    args
  ),
});

IoC.callable('productResolver', [
  'productRepository',
  'productsConnectionType',
], productResolver);
