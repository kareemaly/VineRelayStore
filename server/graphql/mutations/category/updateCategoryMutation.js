import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  mutationWithClientMutationId,
  fromGlobalId,
} from 'graphql-relay';

/**
 * Update category mutation.
 */
export const updateCategoryMutation = (categoryRepository, categoryType) => mutationWithClientMutationId({
  name: 'UpdateCategory',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    logoImage: { type: GraphQLString },
    coverImage: { type: GraphQLString },
  },
  outputFields: {
    category: { type: categoryType },
  },
  mutateAndGetPayload: async ({ id, ...attrs }, { viewer }) => {
    const { id: categoryId } = fromGlobalId(id);
    const category = await categoryRepository.update(viewer, categoryId, attrs);
    return { category };
  }
});

IoC.callable('updateCategoryMutation', [
  'categoryRepository',
  'categoryType',
], updateCategoryMutation);
