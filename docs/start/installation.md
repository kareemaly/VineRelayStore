Installation
---------

## Prerequisites
To run this application on your machine you will need to have the following
- node > 6.9.0
- npm > 3.10.0
- Facebook watchman, [Install from here](https://facebook.github.io/watchman/docs/install.html).
- MongoDB instance running.
  - `MONGODB_URI` in `.env` need to point to this mongodb instance.

## Instructions
- Start by clonning this repo and install dependencies.

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

- Run database migrations, [More about database migrations](../database/migrations.md)

  ```shell
  npm run migrations
  ```

- Now run both the frontend and graphql servers in two terminals, [More about development workflow](../workflow/architecture.md)

  ```shell
  # First terminal (frontend server)
  npm run start:app
  ```

  ```shell
  # Second terminal (graphql server)
  npm run start:graphql
  ```

Two servers should be running on ports which are defined in `.env` file
  - GraphQL server `localhost:{GRAPHQL_PORT}`
  - Frontend server `localhost:{APP_PORT}`
