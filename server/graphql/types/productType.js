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
  globalIdField,
  connectionDefinitions,
} from 'graphql-relay';

import IoC from 'AppIoC';

export const productType = (
  productModel,
  nodeInterface,
  userType,
  brandType,
  categoryType
) => new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: globalIdField('Product'),
    slug: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    mainImage: { type: GraphQLString },
    brand: {
      type: new GraphQLNonNull(brandType),
      resolve: product => product.getBrand(),
    },
    category: {
      type: new GraphQLNonNull(categoryType),
      resolve: product => product.getCategory(),
    },
    creator: {
      type: new GraphQLNonNull(userType),
      resolve: product => product.getCreator(),
    },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => obj instanceof productModel,
});

IoC.callable('productType', [
  'productModel',
  'nodeInterface',
  'userType',
  'brandType',
  'categoryType',
], productType);
