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
 * Remove brand mutation.
 */
export const removeBrandMutation = (brandRepository) => mutationWithClientMutationId({
  name: 'RemoveBrand',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    deleted: { type: GraphQLBoolean },
    id: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ id }, { viewer }) => {
    const { id: brandId } = fromGlobalId(id);
    const result = await brandRepository.remove(viewer, brandId);
    return { id, deleted: true };
  }
});

IoC.callable('removeBrandMutation', [
  'brandRepository'
], removeBrandMutation);
