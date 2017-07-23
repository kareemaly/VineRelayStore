[![Stories in Ready](https://badge.waffle.io/bitriddler/gql_playground.png?label=ready&title=Ready)](https://waffle.io/bitriddler/gql_playground?utm_source=badge)

VineRelay
---------------
> The best of both worlds. React and GraphQL.

VineRelay is Content Management Boilerplate which enables you to quickly scaffold a shop with the basic features using React, Relay and GraphQL.

Is VineRelay for you?
---------------
- If you are lost while trying to unhderstand how to build React, Relay and GraphQL apps.
- If you are looking for best practices on how to build Relay apps.
- If you are starting to build a shop with React, Relay and GraphQL.

Getting started
-------------
- Start by clonning this repo and installing dependencies.

  ```shell
  git clone https://github.com/VineRelay/VineRelayStore
  cd VineRelayStore
  npm install
  ```

- Set required environment variables
  - Copy `.env-sample` to `.env`
  - Available environment variables are:
    - `SECRET_KEY`: **REQUIRED** will be used to encrypt jwt tokens.
    - `NODE_ENV`: **REQUIRED** available environments are `development` and `production`.
    - `GRAPHQL_PORT`: **REQUIRED** Graphql server port
    - `APP_PORT`: **REQUIRED** Frontend server app
    - `MONGODB_URI`: **REQUIRED** Mongodb URI including auth username and password if exists.
    - `SUPER_USER_EMAIL`: **REQUIRED** the email of the super user. ***A user will be created that will have access to all apis, More about that later***.
    - `SUPER_USER_PASSWORD`: **REQUIRED** the password of the super user 

- Run database migrations

  ```shell
  npm run migrations
  ```

- Now run both the frontend and graphql servers in two terminals

  ```shell
  # First terminal (frontend server)
  npm run start:app
  ```

  ```shell
  # Second terminal (graphql server)
  npm run start:graphql
  ```

Two servers should be running on ports defined in `.env` file
  - GraphQL server `localhost:8080`
  - Frontend server `localhost:3000`

Developing
-----------

### Built With
- Frontend
  - React: 15.6.1
  - StyledComponents: 2.1.0
  - MaterialUI: 0.18.3
  - ReactRelay: 1.0.0 (RelayModern)
- Backend
  - Express: 4.15.3
  - GraphQL: 0.10.3
  - Mongoose: 4.10.7
- Workflow
  - Webpack: 3.0.0
  - DotEnv: 4.0.0

### Prerequisites
- MongoDB instance running.
  - `MONGODB_URI` in `.env` need to point to this mongodb instance. 

### Deploying / Publishing
***Comming Soon***
