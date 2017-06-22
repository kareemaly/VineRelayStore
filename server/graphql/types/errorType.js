import IoC from 'AppIoC';
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

/**
 * Validation message type definition.
 *
 * Validation message has a key and value.
 * e.g.
 * ```
 * {
 *   key: 'password',
 *   value: 'Password is too short.',
 * }
 * ```
 */
const validationMessageType = new GraphQLObjectType({
  name: 'ValidationMessage',
  description: 'Validation error.',
  fields: () => ({
    key: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLString) },
  })
});

/**
 * Error type definition.
 *
 * e.g.
 * ```
 * {
 *   name: 'ValidationError',
 *   message: 'A validation error has occured while registering the user.',
 *   validationMessages: [
 *     {
 *       key: 'password',
 *       value: 'Password is too short',
 *     },
 *   ],
 * }
 * ```
 *
 * For full list of errors
 * @see errors/*
 */
export const errorType = () => new GraphQLObjectType({
  name: 'Error',
  description: 'Unified error type in our system',
  fields: () => ({
    // Error name
    name: { type: new GraphQLNonNull(GraphQLString) },
    // Error message
    message: { type: new GraphQLNonNull(GraphQLString) },
    // This only exists in ValidationError
    // @see errors/ValidationError
    validationMessages: { type: new GraphQLList(validationMessageType) },
    // @todo need to disable this on production
    stack: { type: GraphQLString },
  }),
});

IoC.callable('errorType', [], errorType);
