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

export const categoryType = (
  categoryModel,
  nodeInterface,
  userType
) => new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: globalIdField('Category'),
    slug: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    creator: {
      type: new GraphQLNonNull(userType),
      resolve: category => category.getCreator(),
    },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => obj instanceof categoryModel,
});

IoC.callable('categoryType', [
  'categoryModel',
  'nodeInterface',
  'userType',
], categoryType);
