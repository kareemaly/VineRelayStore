import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import {
  mutationWithClientMutationId,
} from 'graphql-relay';

/**
 * Login user mutation.
 *
 * This mutation takes an email and password and uses token authentication
 * to try to login user and return the user and his token to be used in
 * further requests.
 */
export const loginUserMutation = (tokenAuthManager, userType) => mutationWithClientMutationId({
  name: 'LoginUser',
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    token: { type: GraphQLString },
    viewer: { type: userType },
  },
  mutateAndGetPayload: async ({ email, password }, context) => {
    // Login user
    const { token, viewer } = await tokenAuthManager.login(context.viewer, email, password);
    // Update context viewer
    context.viewer = viewer;
    // Return token and viewer
    return {
      token,
      viewer,
    };
  }
});

IoC.callable('loginUserMutation', [
  'tokenAuthManager',
  'userType',
], loginUserMutation);
