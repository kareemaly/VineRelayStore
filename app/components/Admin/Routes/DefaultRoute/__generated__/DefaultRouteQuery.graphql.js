/**
 * @flow
 * @relayHash e4d40720c09dbe5bb35647b3f939f0ae
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DefaultRouteQueryResponse = {|
  +viewer: {|
    +firstName: ?string;
    +isAdmin: ?boolean;
  |};
|};
*/


/*
query DefaultRouteQuery {
  viewer {
    firstName
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
  "text": "query DefaultRouteQuery {\n  viewer {\n    firstName\n    isAdmin\n    ...DashboardLayout_viewer\n    id\n  }\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n"
};

module.exports = batch;
