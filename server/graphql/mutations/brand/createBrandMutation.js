import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  mutationWithClientMutationId,
} from 'graphql-relay';

/**
 * Create brand mutation.
 */
export const createBrandMutation = (brandRepository, brandType) => mutationWithClientMutationId({
  name: 'CreateBrand',
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    slug: { type: GraphQLString },
  },
  outputFields: {
    brand: { type: brandType },
  },
  mutateAndGetPayload: async (attrs, { viewer }) => {
    const brand = await brandRepository.create(viewer, attrs);
    return { brand };
  }
});

IoC.callable('createBrandMutation', [
  'brandRepository',
  'brandType',
], createBrandMutation);
