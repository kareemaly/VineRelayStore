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
 * Update brand mutation.
 */
export const updateBrandMutation = (brandRepository, brandType) => mutationWithClientMutationId({
  name: 'UpdateBrand',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    coverImage: { type: GraphQLString },
    logoImage: { type: GraphQLString },
  },
  outputFields: {
    brand: { type: brandType },
  },
  mutateAndGetPayload: async ({ id, ...attrs }, { viewer }) => {
    const { id: brandId } = fromGlobalId(id);
    const brand = await brandRepository.update(viewer, brandId, attrs);
    return { brand };
  }
});

IoC.callable('updateBrandMutation', [
  'brandRepository',
  'brandType',
], updateBrandMutation);
