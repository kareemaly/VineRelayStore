import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  cursorForObjectInConnection,
} from 'graphql-relay';

import IoC from 'AppIoC';

export const userType = (
  nodeInterface
) => new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses our app',
  fields: () => ({
    id: globalIdField('User'),
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    fullName: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => !!obj.firstName,
});

IoC.callable('userType', [
  'nodeInterface',
], userType);
