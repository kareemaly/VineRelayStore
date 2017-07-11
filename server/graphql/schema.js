import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';

import IoC from 'AppIoC';

export const graphqlSchema = (
  nodeField,

  // User
  userType,
  loginUserMutation,

  // Brand
  createBrandMutation,
  updateBrandMutation,
  removeBrandMutation,
  brandResolver,

  // Category
  createCategoryMutation,
  updateCategoryMutation,
  removeCategoryMutation,
  categoryResolver,

  // Product
  createProductMutation,
  updateProductMutation,
  removeProductMutation,
  productResolver,

  // Order
  basicCheckoutMutation,
  updateOrderStatusMutation,
  removeOrderMutation,
  orderResolver

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
        categories: categoryResolver,
        products: productResolver,
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
        // Category Mutations
        createCategory: createCategoryMutation,
        updateCategory: updateCategoryMutation,
        removeCategory: removeCategoryMutation,
        // Product Mutations
        createProduct: createProductMutation,
        updateProduct: updateProductMutation,
        removeProduct: removeProductMutation,
        // Order Mutations
        basicCheckout: basicCheckoutMutation,
        updateOrderStatus: updateOrderStatusMutation,
        removeOrder: removeOrderMutation,
      })
    }),
  });
}

IoC.callable('graphqlSchema', [
  'nodeField',
  // User
  'userType',
  'loginUserMutation',

  // Brand
  'createBrandMutation',
  'updateBrandMutation',
  'removeBrandMutation',
  'brandResolver',

  // Category
  'createCategoryMutation',
  'updateCategoryMutation',
  'removeCategoryMutation',
  'categoryResolver',

  // Product
  'createProductMutation',
  'updateProductMutation',
  'removeProductMutation',
  'productResolver',

  // Order
  'basicCheckoutMutation',
  'updateOrderStatusMutation',
  'removeOrderMutation',
  'orderResolver',
], graphqlSchema);
