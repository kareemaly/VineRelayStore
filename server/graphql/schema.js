import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';

import IoC from 'AppIoC';

export const graphqlSchema = (
  nodeField,
  userType,
  brandType,

  loginUserMutation,
  createBrandMutation,
  updateBrandMutation,
  removeBrandMutation,

  brandResolver
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
          // Resolve viewer from request
          // @see auth/middlewares/AuthMiddleware
          resolve: (parent, args, req) => req.viewer,
        },
        brands: brandResolver,
      }),
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: () => ({
        // User mutations
        loginUser: loginUserMutation,
        // Brand Mutations
        createBrand: createBrandMutation,
        updateBrand: updateBrandMutation,
        removeBrand: removeBrandMutation,
      })
    }),
  });
}

IoC.callable('graphqlSchema', [
  'nodeField',
  'userType',
  'brandType',

  'loginUserMutation',
  'createBrandMutation',
  'updateBrandMutation',
  'removeBrandMutation',

  'brandResolver'
], graphqlSchema);
