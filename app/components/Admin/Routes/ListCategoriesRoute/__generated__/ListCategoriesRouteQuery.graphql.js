/**
 * @flow
 * @relayHash 3719f826607dae93b51ae81b63320752
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ListCategoriesRouteQueryResponse = {|
  +viewer: {| |};
  +categories: ?{| |};
|};
*/


/*
query ListCategoriesRouteQuery {
  viewer {
    ...ListCategoriesRoute_viewer
    id
  }
  categories {
    ...ListCategoriesRoute_categories
  }
}

fragment ListCategoriesRoute_viewer on User {
  firstName
  isAdmin
  ...DashboardLayout_viewer
}

fragment ListCategoriesRoute_categories on CategoryConnection {
  ...ListCategories_categories
}

fragment ListCategories_categories on CategoryConnection {
  edges {
    node {
      id
      name
    }
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
    "name": "ListCategoriesRouteQuery",
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
            "name": "ListCategoriesRoute_viewer",
            "args": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "CategoryConnection",
        "name": "categories",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListCategoriesRoute_categories",
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
  "name": "ListCategoriesRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ListCategoriesRouteQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "CategoryConnection",
        "name": "categories",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "CategoryEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Category",
                "name": "node",
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
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ListCategoriesRouteQuery {\n  viewer {\n    ...ListCategoriesRoute_viewer\n    id\n  }\n  categories {\n    ...ListCategoriesRoute_categories\n  }\n}\n\nfragment ListCategoriesRoute_viewer on User {\n  firstName\n  isAdmin\n  ...DashboardLayout_viewer\n}\n\nfragment ListCategoriesRoute_categories on CategoryConnection {\n  ...ListCategories_categories\n}\n\nfragment ListCategories_categories on CategoryConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n"
};

module.exports = batch;
