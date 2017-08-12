/**
 * @flow
 * @relayHash bc046379aec10cd7232b0607067affbf
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type EditCategoryRouteQueryResponse = {|
  +viewer: {|
    +isAdmin: ?boolean;
  |};
  +node: ?{| |};
|};
*/


/*
query EditCategoryRouteQuery(
  $categoryId: ID!
) {
  viewer {
    isAdmin
    ...DashboardLayout_viewer
    id
  }
  node(id: $categoryId) {
    __typename
    ...EditCategory_category
    id
  }
}

fragment DashboardLayout_viewer on User {
  displayName
  firstName
  lastName
  email
}

fragment EditCategory_category on Category {
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
        "name": "categoryId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditCategoryRouteQuery",
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
            "variableName": "categoryId",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EditCategory_category",
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
  "name": "EditCategoryRouteQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "categoryId",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "EditCategoryRouteQuery",
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
            "variableName": "categoryId",
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
            "type": "Category",
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
  "text": "query EditCategoryRouteQuery(\n  $categoryId: ID!\n) {\n  viewer {\n    isAdmin\n    ...DashboardLayout_viewer\n    id\n  }\n  node(id: $categoryId) {\n    __typename\n    ...EditCategory_category\n    id\n  }\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n\nfragment EditCategory_category on Category {\n  id\n  name\n  slug\n  description\n  coverImage\n  logoImage\n}\n"
};

module.exports = batch;
