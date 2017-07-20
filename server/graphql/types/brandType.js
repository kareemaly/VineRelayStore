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

export const brandType = (
  brandModel,
  nodeInterface,
  userType
) => new GraphQLObjectType({
  name: 'Brand',
  fields: () => ({
    id: globalIdField('Brand'),
    slug: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    coverImage: { type: GraphQLString },
    logoImage: { type: GraphQLString },
    creator: {
      type: new GraphQLNonNull(userType),
      resolve: brand => brand.getCreator(),
    },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => obj instanceof brandModel,
});

IoC.callable('brandType', [
  'brandModel',
  'nodeInterface',
  'userType',
], brandType);
