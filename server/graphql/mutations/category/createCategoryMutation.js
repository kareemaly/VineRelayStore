import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  mutationWithClientMutationId,
} from 'graphql-relay';

/**
 * Create category mutation.
 */
export const createCategoryMutation = (categoryRepository, categoryType) => mutationWithClientMutationId({
  name: 'CreateCategory',
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    category: { type: categoryType },
  },
  mutateAndGetPayload: async (attrs, { viewer }) => {
    const category = await categoryRepository.create(viewer, attrs);
    return { category };
  }
});

IoC.callable('createCategoryMutation', [
  'categoryRepository',
  'categoryType',
], createCategoryMutation);
