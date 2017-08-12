/**
 * @flow
 * @relayHash 497aab56a1a4bbf55e62f0b3f13d856b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type LoginRouteQueryResponse = {|
  +viewer: {|
    +isAdmin: ?boolean;
  |};
|};
*/


/*
query LoginRouteQuery {
  viewer {
    isAdmin
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginRouteQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "isAdmin",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "LoginRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "LoginRouteQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "isAdmin",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query LoginRouteQuery {\n  viewer {\n    isAdmin\n    id\n  }\n}\n"
};

module.exports = batch;
