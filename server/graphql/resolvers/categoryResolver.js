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
  resolve: (viewer, { slug, ...args }) => connectionFromPromisedArray(
    categoryRepository.query(viewer, { slug }),
    args
  ),
});

IoC.callable('categoryResolver', [
  'categoryRepository',
  'categoriesConnectionType',
], categoryResolver);
