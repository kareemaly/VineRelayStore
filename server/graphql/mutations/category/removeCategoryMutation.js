import IoC from 'AppIoC';
import {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  fromGlobalId,
  mutationWithClientMutationId,
} from 'graphql-relay';

/**
 * Remove category mutation.
 */
export const removeCategoryMutation = (categoryRepository) => mutationWithClientMutationId({
  name: 'RemoveCategory',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deleted: { type: GraphQLBoolean },
    deletedId: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ id }, { viewer }) => {
    const { id: categoryId } = fromGlobalId(id);
    const result = await categoryRepository.remove(viewer, categoryId);
    return { deletedId: id, deleted: true };
  }
});

IoC.callable('removeCategoryMutation', [
  'categoryRepository'
], removeCategoryMutation);
