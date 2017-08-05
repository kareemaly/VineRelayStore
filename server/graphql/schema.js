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
  brandsResolver,

  // Category
  createCategoryMutation,
  updateCategoryMutation,
  removeCategoryMutation,
  categoriesResolver,

  // Product
  createProductMutation,
  updateProductMutation,
  removeProductMutation,
  productsResolver,

  // Order
  basicCheckoutMutation,
  updateOrderStatusMutation,
  removeOrderMutation,
  ordersResolver

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
        brands: brandsResolver,
        categories: categoriesResolver,
        products: productsResolver,
        orders: ordersResolver,
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
  'brandsResolver',

  // Category
  'createCategoryMutation',
  'updateCategoryMutation',
  'removeCategoryMutation',
  'categoriesResolver',

  // Product
  'createProductMutation',
  'updateProductMutation',
  'removeProductMutation',
  'productsResolver',

  // Order
  'basicCheckoutMutation',
  'updateOrderStatusMutation',
  'removeOrderMutation',
  'ordersResolver',
], graphqlSchema);
