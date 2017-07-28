Development workflow
--------------------

This repository contains two apps that are meant to be hosted separately (can be hosted as one app too).
- **GraphQL Application**: Hosts GraphQL APIs.
- **Web Application**: Hosts React/Relay frontend web application.

# GraphQL Application
All files concerning this application are contained in `/server` directory.

Run this in your terminal to start the development server `npm run start:graphql`
This command will run two commands in concurrent:
- **Watcher**: This watches for any changes in the graphql directory `/server/graphql` to generate two files `schema.graphql` and `schema.json` in `/server/graphql/__generated__`, [More about this](watchers.md).
- **Server**: Launches express server that hosts `/graphql`. Also it hosts `graphiql` [GraphQL IDE](https://github.com/graphql/graphiql).

This application uses the following env. variables:
- `NODE_ENV` defaults to `development`
- `SECRET_KEY`
- `GRAPHQL_PORT` defaults to `8080`
- `MONGODB_URI`
- `SUPER_USER_EMAIL`
- `SUPER_USER_PASSWORD`

**Tip** You can create `.env` file in the root directory and define these env. variables in it. see `.env-sample`.

# Web Application
All files concerning this application are contained in `/app` directory.

Run this in your terminal to start the development server `npm run start:app` 

This command will run two commands in concurrent:
- **Watcher**: This watchers for any changes in th components directory `/app/components` to convert literals into generated files, [More about this](watchers.md).
- **Server**: Launches express server that uses webpack to host frontend web application.

This application uses the following env. variables:
- `NODE_ENV` defaults to `development`
- `APP_PORT` defaults to `3000`
- `GRAPHQL_PORT` defaults to `8080`
- `GRAPHQL_HOST` defaults to `localhost`
