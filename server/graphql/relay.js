import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import IoC from 'AppIoC';

export const relayNodeDefinitions = () => {

  const resolveGlobalId = (globalId, { viewer }) => {
    const { type, id } = fromGlobalId(globalId);

    switch(type) {
      case 'User':
        return {
          firstName: 'Kareem',
          lastName: 'Mohamed',
          email: 'bitriddler@gmail.com',
        };
    }
  }

  /**
   * We get the node interface and field from the Relay library.
   *
   * The first method defines the way we resolve an ID to its object.
   * The second defines the way we resolve an object to its GraphQL type.
   */
  return nodeDefinitions(
    resolveGlobalId
  );
};

IoC.callable('relayNodeDefinitions', [
], relayNodeDefinitions);

IoC.callable('nodeInterface', [
  'relayNodeDefinitions'
], ({ nodeInterface }) => nodeInterface);

IoC.callable('nodeField', [
  'relayNodeDefinitions'
], ({ nodeField }) => nodeField);


