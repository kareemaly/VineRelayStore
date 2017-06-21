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
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
} from 'graphql-relay';

import IoC from 'AppIoC';

export const userResolver = (usersConnectionType) => {
  return {
    type: usersConnectionType,
    args: {
      // Relay search args
      ...connectionArgs,
      // Our custom search criteria goes here
      email: {type: GraphQLString},
    },
    resolve: async (parent, { name, userTypes, ...args }, { viewer }) => {
      const user = await ({
        email: 'bitriddler@gmail.com',
        firstName: 'Kareem',
        lastName: 'Mohamed',
        fullName: "Kareem Mohamed",
      });

      return connectionFromPromisedArray(
        user,
        args
      )
    },
  }
}

IoC.callable('userResolver', ['usersConnectionType'], userResolver);
