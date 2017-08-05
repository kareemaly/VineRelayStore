import IoC from 'AppIoC';
import {
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
  connectionDefinitions,
} from 'graphql-relay';

/**
 * Resolve brands.
 */
export const brandsResolver = (brandRepository, brandType) => ({
  type: connectionDefinitions({ nodeType: brandType }).connectionType,
  args: {
    // Relay search args
    ...connectionArgs,
    // Our custom search criteria goes here
    slug: { type: GraphQLString },
  },
  resolve: (_, { slug, ...args }, { viewer }) => connectionFromPromisedArray(
    brandRepository.query(viewer, { slug }),
    args
  ),
});

IoC.callable('brandsResolver', [
  'brandRepository',
  'brandType',
], brandsResolver);
