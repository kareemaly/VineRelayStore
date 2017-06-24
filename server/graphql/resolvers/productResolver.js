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
  },
  resolve: (viewer, { slug, ...args }) => connectionFromPromisedArray(
    productRepository.query(viewer, { slug }),
    args
  ),
});

IoC.callable('productResolver', [
  'productRepository',
  'productsConnectionType',
], productResolver);
