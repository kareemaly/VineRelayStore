import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import {
  mutationWithClientMutationId,
} from 'graphql-relay';

import {
  Types,
} from 'mongoose';

import IoC from 'AppIoC';

export const createMutation = (userType, errorType) => mutationWithClientMutationId({
  name: 'CreateUser',
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    user: { type: userType },
    error: {type: errorType},
  },
  mutateAndGetPayload: async (attrs, { viewer }) => {
    return {
      user: {
        id: Types.ObjectId(),
        firstName: attrs.firstName,
        lastName: attrs.lastName,
        email: attrs.email,
      },
      error: null,
    };
  }
});

IoC.callable('createUserMutation', ['userType', 'errorType'], createMutation);
