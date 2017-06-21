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
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  cursorForObjectInConnection
} from 'graphql-relay';

import IoC from 'AppIoC';

const validationMessageType = new GraphQLObjectType({
  name: 'ValidationMessage',
  description: 'Validation error.',
  fields: () => ({
    key: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLString) },
  })
});

export const errorType = () => new GraphQLObjectType({
  name: 'Error',
  description: 'Unified error type in our system',
  fields: () => ({
    message: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    validationMessages: { type: new GraphQLList(validationMessageType) },
    // Disable stack on production
    stack: { type: GraphQLString },
  }),
});

IoC.callable('errorType', [], errorType);
