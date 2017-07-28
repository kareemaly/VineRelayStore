GraphQL Object Type Tutorial
----------------
This tutorial will show you how to create a graphql object type.

Start by running the graphql server
```shell
npm run start:graphql
```

Go to `localhost:8080/graphql` and write this query in the browser
```
query {
  jonSnow {
    name
    title
  }
}
```

You should get `errors` in the response which contain a message like this `Cannot query field \"jonSnow\" on type \"Query\"`.

The response we expect to get
```json
{
  "data": {
    "jonSnow": {
      "name": "Jon Snow",
      "title": "Lord Commander of the Night's Watch"
    }
  }
}
```

#### GraphQL type
Create a new file `jonSnowType.js` inside `/server/graphql/types/` that defines Jon Snow graphql object type.
```babel
import IoC from 'AppIoC';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

import {
  globalIdField,
} from 'graphql-relay';

export const jonSnowType = () => new GraphQLObjectType({
  name: 'JonSnow',
  fields: () => ({
    id: globalIdField('JonSnow'),
    name: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

IoC.callable('jonSnowType', [], jonSnowType);
```

#### GraphQL resolver
Create a new file `jonSnowResolver.js` inside `/server/graphql/resolvers` that defines how to resolve Jon Snow object.
```babel
import IoC from 'AppIoC';

export const jonSnowResolver = (jonSnowType) => ({
  type: jonSnowType,
  resolve: () => ({
    id: '123',
    name: 'Jon Snow',
    title: `Lord Commander of the Night's Watch`,
  }),
});

IoC.callable('jonSnowResolver', [
  'jonSnowType',
], jonSnowResolver);
```

**ProTip** The resolve method can return a promise that returns the Jon Snow object.

#### GraphQL schema
Open the graphql schema definition file `/server/graphql/schema.js`.
- Add dependency on `jonSnowResolver`, [More about IOC dependencies](../architecture/ioc.md).
- Add `jonSnowResolver` in the query object type
```babel
return new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      node: nodeField,
      ...
      brands: brandsResolver,
      jonSnow: jonSnowResolver,
    }),
  }),
  ...
});
```

That's it! Back to the browser you should see the expected response.

This is useful only for returning one object, e.g. `themeOptionsType`, `aboutContentType`, ..etc.
But when it comes to return an array of objects...

[Next: Relay Connections Tutorial](./graphql-relay-connections.md)
