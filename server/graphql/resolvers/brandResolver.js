import IoC from 'AppIoC';
import {
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
} from 'graphql-relay';

/**
 * Resolve brands.
 */
export const brandResolver = (brandRepository, brandsConnectionType) => ({
  type: brandsConnectionType,
  args: {
    // Relay search args
    ...connectionArgs,
    // Our custom search criteria goes here
    slug: { type: GraphQLString },
  },
  resolve: (viewer, { slug, ...args }) => connectionFromPromisedArray(
    brandRepository.query(viewer, { slug }),
    args
  ),
});

IoC.callable('brandResolver', [
  'brandRepository',
  'brandsConnectionType',
], brandResolver);
