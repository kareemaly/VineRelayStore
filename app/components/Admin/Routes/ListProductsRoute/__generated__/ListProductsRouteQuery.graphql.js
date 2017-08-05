/**
 * @flow
 * @relayHash ddbd379bfb0031816d044e2ca9bf2be5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ListProductsRouteQueryResponse = {|
  +viewer: {| |};
  +products: ?{| |};
|};
*/


/*
query ListProductsRouteQuery {
  viewer {
    ...ListProductsRoute_viewer
    id
  }
  products {
    ...ListProductsRoute_products
  }
}

fragment ListProductsRoute_viewer on User {
  firstName
  isAdmin
  ...DashboardLayout_viewer
}

fragment ListProductsRoute_products on ProductConnection {
  ...ListProducts_products
}

fragment ListProducts_products on ProductConnection {
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
    "name": "ListProductsRouteQuery",
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
            "name": "ListProductsRoute_viewer",
            "args": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ProductConnection",
        "name": "products",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListProductsRoute_products",
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
  "name": "ListProductsRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ListProductsRouteQuery",
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
        "concreteType": "ProductConnection",
        "name": "products",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ProductEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Product",
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
  "text": "query ListProductsRouteQuery {\n  viewer {\n    ...ListProductsRoute_viewer\n    id\n  }\n  products {\n    ...ListProductsRoute_products\n  }\n}\n\nfragment ListProductsRoute_viewer on User {\n  firstName\n  isAdmin\n  ...DashboardLayout_viewer\n}\n\nfragment ListProductsRoute_products on ProductConnection {\n  ...ListProducts_products\n}\n\nfragment ListProducts_products on ProductConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n"
};

module.exports = batch;
