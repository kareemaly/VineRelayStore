import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';

import IoC from 'AppIoC';

export const notifierType = () => new GraphQLObjectType({
  name: 'Notifier',
  fields: () => ({
    message: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

IoC.callable('notifierType', [], notifierType);
