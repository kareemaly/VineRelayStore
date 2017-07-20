import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

import {
  globalIdField,
} from 'graphql-relay';

import IoC from 'AppIoC';

export const orderItemType = (
  orderItemModel,
  nodeInterface,
  productType
) => new GraphQLObjectType({
  name: 'OrderItem',
  fields: () => ({
    id: globalIdField('OrderItem'),
    quantity: { type: new GraphQLNonNull(GraphQLInt) },
    product: {
      // This can be null if product has been removed
      type: productType,
      resolve: (item) => item.getProduct(),
    },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => obj instanceof orderItemModel,
});

IoC.callable('orderItemType', [
  'orderItemModel',
  'nodeInterface',
  'productType',
], orderItemType);
