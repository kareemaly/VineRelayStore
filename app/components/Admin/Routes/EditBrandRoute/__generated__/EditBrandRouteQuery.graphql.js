/**
 * @flow
 * @relayHash 506d4e7ce444f35b8684bc27f98a0c96
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type EditBrandRouteQueryResponse = {|
  +viewer: {|
    +isAdmin: ?boolean;
  |};
  +node: ?{| |};
|};
*/


/*
query EditBrandRouteQuery(
  $brandId: ID!
) {
  viewer {
    isAdmin
    ...DashboardLayout_viewer
    id
  }
  node(id: $brandId) {
    __typename
    ...EditBrand_brand
    id
  }
}

fragment DashboardLayout_viewer on User {
  displayName
  firstName
  lastName
  email
}

fragment EditBrand_brand on Brand {
  id
  name
  slug
  description
  coverImage
  logoImage
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "brandId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditBrandRouteQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "brandId",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EditBrand_brand",
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
  "name": "EditBrandRouteQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "brandId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "EditBrandRouteQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "brandId",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "__typename",
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
            "type": "Brand",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "slug",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "coverImage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "logoImage",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query EditBrandRouteQuery(\n  $brandId: ID!\n) {\n  viewer {\n    isAdmin\n    ...DashboardLayout_viewer\n    id\n  }\n  node(id: $brandId) {\n    __typename\n    ...EditBrand_brand\n    id\n  }\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n\nfragment EditBrand_brand on Brand {\n  id\n  name\n  slug\n  description\n  coverImage\n  logoImage\n}\n"
};

module.exports = batch;
