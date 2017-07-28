Watchers
---------------

## GraphQL watcher
You can run the watcher with the following command
```shell
npm run watcher:graphql
```

This command will watch for file changes inside `/server/graphql` and run the `updateSchema.js` script.

#### updateSchema.js
You can find the `updateSchema.js` script inside `/internals/updateSchema.js`.

This script gets our graphql schema and converts to:
  - JSON format and saves in `/server/graphql/__generated__/schema.json`
    - More about this [from here](http://graphql.org/learn/introspection).

  - Schema Language format and saves in `/server/graphql/__generated__/schema.graphql`
    - More about this [from here](http://graphql.org/learn/schema/).

#### Why it's required?
These conversions are required by **ReactRelay** in the frontend app to understand our graphql schema.


## Frontend application watcher
You can the watcher with the following command
```shell
npm run watcher:app
```

This command will watch for file changes inside `/app/components` and run the [relay-compiler](https://facebook.github.io/relay/docs/relay-compiler.html).

#### RelayCompiler
You can find more about RelayCompiler [from here](https://facebook.github.io/relay/docs/relay-compiler.html).

RelayCompiler convert literals that are written in our `/app/components` directory into generated files that live alongside our components in `__generated__` directory.

For the RelayCompiler to work it needs to know our graphql schema and we pass that file - that was generated using the **GraphQL watcher** - `server/graphql/__generated__/schema.json` as an option to that command.
