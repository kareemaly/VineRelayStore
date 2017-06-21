import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';

import IoC from 'AppIoC';

export const graphqlSchema = (
  nodeField,
  createUserMutation,
  userResolver,
  userType
) => {
  /**
   * Construct schema (query and mutation)
   *
   * query: root query has only the viewer
   * mutation: all available mutations in our application
   */
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        node: nodeField,
        viewer: {
          type: new GraphQLNonNull(userType),
          resolve: (parent, args, req) => ({
            firstName: 'Kareem',
            lastName: 'Mohamed',
            email: 'kareem3d.a@gmail.com',
            fullName: 'Kareem Mohamed',
            password: 'pass123',
          }),
        },
        users: userResolver,
      })
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => ({
        // User mutations
        createUser: createUserMutation,
      })
    }),
  });
}

IoC.callable('graphqlSchema', [
  'nodeField',
  'createUserMutation',
  'userResolver',
  'userType',
], graphqlSchema);
