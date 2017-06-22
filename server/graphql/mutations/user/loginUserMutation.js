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
 *
 * If logging user in fails it returns an error type.
 * @see graphql/types/errorType
 */
export const loginUserMutation = (tokenAuthManager, userType, errorType) => mutationWithClientMutationId({
  name: 'Login',
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    token: { type: GraphQLString },
    viewer: { type: userType },
    error: { type: errorType },
  },
  mutateAndGetPayload: async ({ email, password }, context) => {
    try {
      // Login user
      const { token, viewer } = await tokenAuthManager.login(context.viewer, email, password);
      // Update context viewer
      context.viewer = viewer;
      // Return token and viewer
      return {
        token,
        viewer,
      };
    } catch(error) {
      // An error while trying to login occured then return the error
      return {
        token: null,
        viewer: null,
        error: error.toObject(),
      };
    }
  }
});

IoC.callable('loginUserMutation', [
  'tokenAuthManager',
  'userType',
  'errorType',
], loginUserMutation);
