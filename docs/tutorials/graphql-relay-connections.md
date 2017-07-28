GraphQL Relay Connections Tutorial
----------------
This tutorial will show you how to create graphql relay connections.

#### Prerequisites
- Make sure to understand [Relay Connections](https://facebook.github.io/relay/docs/graphql-connections.html).

#### First step
Start by running the graphql server
```shell
npm run start:graphql
```

Go to `localhost:8080/graphql` and write this query in the browser
```
query {
  characters {
    edges {
      node {
        name
        title
      }
    }
  }
}
```

You should get `errors` in the response which contain a message like this `Cannot query field \"characters\" on type \"Query\".`.

The response we expect to get
```json
{
  "data": {
    "characters": {
      "edges": [
        {
          "node": {
            "name": "Jon Snow",
            "title": "Lord Commander of the Night's Watch"
          }
        },
        {
          "node": {
            "name": "Sansa Stark",
            "title": "Princess, Lady of Winterfell"
          }
        },
      ]
    }
  }
}
```

#### GraphQL types
Create a new file `characterType.js` inside `/server/graphql/types/`, This file will define the character type and the connection type.
```babel
import IoC from 'AppIoC';
import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { globalIdField, connectionDefinitions } from 'graphql-relay';

/**
 * Registering character type
 */
export const characterType = (nodeInterface) => new GraphQLObjectType({
  name: 'Character',
  fields: () => ({
    id: globalIdField('Character'),
    name: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
  }),
  interfaces: [nodeInterface],
  isTypeOf: obj => obj.__type === 'Character',
});

IoC.callable('characterType', [ 'nodeInterface' ], characterType);


/**
 * Registering characters connection type
 */
const charactersConnectionType = (characterType) => connectionDefinitions({
  nodeType: characterType,
}).connectionType;

IoC.callable('charactersConnectionType', [ 'characterType' ], charactersConnectionType);

```

#### GraphQL resolver
Create a new file `charactersResolver.js` inside `/server/graphql/resolvers` that defines how to resolve the characters array.
```babel
import IoC from 'AppIoC';
import { GraphQLString } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';

const theNorthCharacters = [
  {
    "id": "123",
    "name": "Jon Snow",
    "title": "Lord Commander of the Night's Watch",
    "__type": "Character",
  },
  {
    "id": "234",
    "name": "Sansa Stark",
    "title": "Princess, Lady of Winterfell",
    "__type": "Character",
  },
];

export const charactersResolver = (charactersConnectionType) => ({
  type: charactersConnectionType,
  args: connectionArgs,
  resolve: (_, args) => connectionFromArray(theNorthCharacters, args),
});

IoC.callable('charactersResolver', [ 'charactersConnectionType' ], charactersResolver);

```

**ProTip** The resolve method can return a promise that returns an array of characters, All you need to do is change `connectionFromArray` to `connectionFromPromisedArray`, [More about this](https://github.com/graphql/graphql-relay-js). 

#### GraphQL schema
Open the graphql schema definition file `/server/graphql/schema.js`.
- Add dependency on `charactersResolver`, [More about IOC dependencies](../architecture/ioc.md).
- Add `charactersResolver` in the query object type
```babel
return new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      node: nodeField,
      ...
      brands: brandsResolver,
      characters: charactersResolver,
    }),
  }),
  ...
});
```

That's it! Back to the browser you should see an array of two characters Jon Snow and Sansa Stark.
