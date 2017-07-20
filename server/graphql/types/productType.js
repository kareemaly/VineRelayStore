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
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    description: { type: GraphQLString, resolve: () => `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.` },
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
