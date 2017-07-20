import IoC from 'AppIoC';
import {
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromPromisedArray,
} from 'graphql-relay';

/**
 * Resolve categories.
 */
export const categoryResolver = (categoryRepository, categoriesConnectionType) => ({
  type: categoriesConnectionType,
  args: {
    // Relay search args
    ...connectionArgs,
    // Our custom search criteria goes here
    slug: { type: GraphQLString },
  },
  resolve: (_, { slug, ...args }, { viewer }) => connectionFromPromisedArray(
    categoryRepository.query(viewer, { slug }),
    args
  ),
});

IoC.callable('categoryResolver', [
  'categoryRepository',
  'categoriesConnectionType',
], categoryResolver);
