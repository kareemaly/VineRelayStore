import IoC from 'AppIoC';
import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {
  globalIdField,
} from 'graphql-relay';

/**
 * User type definition.
 */
export const userType = (nodeInterface, userModel) => new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: globalIdField('User'),
    firstName: { type: GraphQLString, resolve: (user) => user.getFirstName() },
    lastName: { type: GraphQLString, resolve: (user) => user.getLastName() },
    displayName: { type: GraphQLString, resolve: (user) => user.getDisplayName() },
    email: { type: GraphQLString, resolve: (user) => user.getEmail() },
    isGuest: { type: GraphQLBoolean, resolve: (user) => user.isGuest() },
    isAdmin: { type: GraphQLBoolean, resolve: (user) => user.isAdmin() },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => obj instanceof userModel,
});

IoC.callable('userType', [
  'nodeInterface',
  'userModel',
], userType);
