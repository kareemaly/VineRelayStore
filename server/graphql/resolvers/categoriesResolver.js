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
 * Resolve categories.
 */
export const categoriesResolver = (categoryRepository, categoryType) => ({
  type: connectionDefinitions({ nodeType: categoryType }).connectionType,
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

IoC.callable('categoriesResolver', [
  'categoryRepository',
  'categoryType',
], categoriesResolver);
