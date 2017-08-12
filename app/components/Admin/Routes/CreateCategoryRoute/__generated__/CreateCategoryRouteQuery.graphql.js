/**
 * @flow
 * @relayHash 3ca6c8bc5cb732654a26ed7214a24242
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateCategoryRouteQueryResponse = {|
  +viewer: {|
    +isAdmin: ?boolean;
  |};
|};
*/


/*
query CreateCategoryRouteQuery {
  viewer {
    isAdmin
    ...DashboardLayout_viewer
    id
  }
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
    "name": "CreateCategoryRouteQuery",
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
            "kind": "FragmentSpread",
            "name": "DashboardLayout_viewer",
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
  "name": "CreateCategoryRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CreateCategoryRouteQuery",
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
          },
          {
            "kind": "InlineFragment",
            "type": "User",
            "selections": [
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
                "name": "firstName",
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
  "text": "query CreateCategoryRouteQuery {\n  viewer {\n    isAdmin\n    ...DashboardLayout_viewer\n    id\n  }\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n"
};

module.exports = batch;
