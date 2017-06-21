import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const GRAPHQL_PORT = process.env.GRAPHQL_PORT;
const GRAPHQL_HOST = process.env.GRAPHQL_HOST;

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch(`http://${GRAPHQL_HOST}:${GRAPHQL_PORT}/graphql`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store,
});

export default environment;
