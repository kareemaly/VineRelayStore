Herok Deployment
---------------

## Set the following environment variables
- `NPM_CONFIG_PRODUCTION` must be `false`.
- `SECRET_KEY` used for JWT encoding e.g. `somesecret`.
- `MONGODB_URI` MongoDB instance to connect to.
- `SUPER_USER_EMAIL` used to seed super user e.g. `admin@yourstore.com`.
- `SUPER_USER_PASSWORD` used to seed super user e.g. `securepass123`.

## Push to heroku
This package is already configured with a `Procfile` and `heroku-postbuild` script and you dont need to do further configurations to make the deployment work.
