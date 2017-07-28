Servers
------------

## GraphQL Server
You can run the graphql server by running this command
```shell
npm run serve:graphql
```

This command will run the graphql server on `GRAPHQL_PORT`. The server is also setup with [graphiql](https://github.com/graphql/graphiql), An in-browser IDE for exploring GraphQL. It's hosted on `localhost:{GRAPHQL_PORT}/graphql`.

**Remember** that any changes to the graphql schema will require you to run `npm run update-graphql-schema` command. To avoid this you can:
- Run `npm run watcher:graphql` on another terminal to `watch` and `update-graphql-schema`.
- Or use `npm run start:graphql` command to run both `npm run serve:graphql` and `npm run watcher:graphql` on the same terminal using [concurrently](https://github.com/kimmobrunfeldt/concurrently).

## Frontend Server
You can run the frontend app server by running this command
```shell
npm run serve:app
```

This will run the frontend server equipped with webpack to watch and build your `/app` directory. You can visit on `localhost:{PORT}`, where `PORT` comes from env. variables.

**Remember** that any changes to the graphql literals will require you to run `npm run update-relay` command. To avoid this you can: 
- Run `npm run watcher:app` on another terminal to `watch` and `update-relay`.
- Or use `npm run start:app` command to run both `npm run serve:app` and `npm run watcher:app` on the same terminal using [concurrently](https://github.com/kimmobrunfeldt/concurrently).

