import IoC from 'AppIoC';
import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLInt,
} from 'graphql';
import {
  mutationWithClientMutationId,
  fromGlobalId,
} from 'graphql-relay';

const orderItemInput = new GraphQLInputObjectType({
  name: 'OrderItemInput',
  fields: () => ({
    quantity: { type: new GraphQLNonNull(GraphQLInt) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    product: { type: new GraphQLNonNull(GraphQLID) },
  }),
});

/**
 * Create order mutation.
 */
export const basicCheckoutMutation = (basicCheckoutHandler, orderType) => mutationWithClientMutationId({
  name: 'BasicCheckout',
  inputFields: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    addressLine1: { type: new GraphQLNonNull(GraphQLString) },
    addressLine2: { type: GraphQLString },
    city: { type: new GraphQLNonNull(GraphQLString) },
    state: { type: new GraphQLNonNull(GraphQLString) },
    zipCode: { type: new GraphQLNonNull(GraphQLString) },
    phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
    items: { type: new GraphQLList(orderItemInput) },
  },
  outputFields: {
    order: { type: orderType },
  },
  mutateAndGetPayload: async ({ items, ...orderDetails }, { viewer }) => {
    // Convert relay id to mongo id
    items = items.map((item) => ({
      ...item,
      product: fromGlobalId(item.product).id,
    }));
    // Run basic checkout handler
    const order = await basicCheckoutHandler.run(viewer, orderDetails, items);
    return { order };
  }
});

IoC.callable('basicCheckoutMutation', [
  'basicCheckoutHandler',
  'orderType',
], basicCheckoutMutation);
