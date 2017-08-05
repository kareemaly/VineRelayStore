/**
 * @flow
 * @relayHash d0c42f52ed72fb6510f8b7443e0c0aec
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DefaultRouteQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query DefaultRouteQuery {
  viewer {
    ...DefaultRoute_viewer
    id
  }
}

fragment DefaultRoute_viewer on User {
  firstName
  isAdmin
  ...DashboardLayout_viewer
}

fragment DashboardLayout_viewer on User {
  displayName
  firstName
  lastName
  email
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DefaultRouteQuery",
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
            "kind": "FragmentSpread",
            "name": "DefaultRoute_viewer",
            "args": null
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
  "name": "DefaultRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "DefaultRouteQuery",
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
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "User",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "firstName",
                "storageKey": null
              },
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
                "name": "displayName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "lastName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query DefaultRouteQuery {\n  viewer {\n    ...DefaultRoute_viewer\n    id\n  }\n}\n\nfragment DefaultRoute_viewer on User {\n  firstName\n  isAdmin\n  ...DashboardLayout_viewer\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n"
};

module.exports = batch;
