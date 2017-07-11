import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import {
  globalIdField,
} from 'graphql-relay';

import IoC from 'AppIoC';

export const orderType = (
  orderModel,
  orderItemType,
  nodeInterface,
  orderItemRepository
) => new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    id: globalIdField('Order'),
    orderNumber: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    addressLine1: { type: new GraphQLNonNull(GraphQLString) },
    addressLine2: { type: GraphQLString },
    city: { type: new GraphQLNonNull(GraphQLString) },
    state: { type: new GraphQLNonNull(GraphQLString) },
    zipCode: { type: new GraphQLNonNull(GraphQLString) },
    phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
    items: {
      type: new GraphQLList(orderItemType),
      resolve: (order) => orderItemRepository.findByOrder(order),
    },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => obj instanceof orderModel,
});

IoC.callable('orderType', [
  'orderModel',
  'orderItemType',
  'nodeInterface',
  'orderItemRepository',
], orderType);
