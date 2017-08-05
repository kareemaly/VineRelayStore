/**
 * @flow
 * @relayHash bac7d10950b28ca794d56cfaa4b29bc8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type LoginRouteQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query LoginRouteQuery {
  viewer {
    ...LoginRoute_viewer
    id
  }
}

fragment LoginRoute_viewer on User {
  isAdmin
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
            "kind": "FragmentSpread",
            "name": "LoginRoute_viewer",
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
                "name": "isAdmin",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query LoginRouteQuery {\n  viewer {\n    ...LoginRoute_viewer\n    id\n  }\n}\n\nfragment LoginRoute_viewer on User {\n  isAdmin\n}\n"
};

module.exports = batch;
