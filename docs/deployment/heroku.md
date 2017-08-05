Herok Deployment
---------------

## Set the following environment variables
- `NPM_CONFIG_PRODUCTION` must be `false`.
- `SECRET_KEY` used for JWT encoding e.g. `somesecret`.
- `MONGODB_URI` MongoDB instance to connect to.

## Push to heroku
This package is already configured with a `Procfile` and `heroku-postbuild` script and you dont need to do further configurations to make the deployment work.
