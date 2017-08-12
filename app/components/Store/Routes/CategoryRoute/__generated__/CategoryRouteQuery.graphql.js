/**
 * @flow
 * @relayHash f6e74f83b2fbd2d1e4179df463154765
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CategoryRouteQueryResponse = {|
  +node: ?{|
    +id: string;
    +description?: ?string;
  |};
  +products: ?{| |};
  +notifier: ?{| |};
  +viewer: {| |};
|};
*/


/*
query CategoryRouteQuery(
  $categoryId: ID!
) {
  node(id: $categoryId) {
    __typename
    id
    ... on Category {
      description
    }
    ...CategoryHero_category
  }
  products(categoryId: $categoryId) {
    ...ProductsGrid_products
  }
  notifier {
    ...StoreLayout_notifier
  }
  viewer {
    ...StoreLayout_viewer
    id
  }
}

fragment CategoryHero_category on Category {
  name
  coverImage
}

fragment ProductsGrid_products on ProductConnection {
  edges {
    node {
      id
      name
      mainImage
      price
    }
  }
}

fragment StoreLayout_notifier on Notifier {
  message
  ...Notifier_notifier
}

fragment StoreLayout_viewer on User {
  isAdmin
  ...AdminFooter_viewer
}

fragment AdminFooter_viewer on User {
  displayName
}

fragment Notifier_notifier on Notifier {
  message
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
    "name": "CategoryRouteQuery",
    "selections": [
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
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "CategoryHero_category",
            "args": null
          },
          {
            "kind": "InlineFragment",
            "type": "Category",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
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
            "name": "categoryId",
            "variableName": "categoryId",
            "type": "ID"
          }
        ],
        "concreteType": "ProductConnection",
        "name": "products",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductsGrid_products",
            "args": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Notifier",
        "name": "notifier",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "StoreLayout_notifier",
            "args": null
          }
        ],
        "storageKey": null
      },
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
            "name": "StoreLayout_viewer",
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
  "name": "CategoryRouteQuery",
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
    "name": "CategoryRouteQuery",
    "operation": "query",
    "selections": [
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
                "name": "description",
                "storageKey": null
              },
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
                "name": "coverImage",
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
            "name": "categoryId",
            "variableName": "categoryId",
            "type": "ID"
          }
        ],
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "mainImage",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "price",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Notifier",
        "name": "notifier",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "displayName",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query CategoryRouteQuery(\n  $categoryId: ID!\n) {\n  node(id: $categoryId) {\n    __typename\n    id\n    ... on Category {\n      description\n    }\n    ...CategoryHero_category\n  }\n  products(categoryId: $categoryId) {\n    ...ProductsGrid_products\n  }\n  notifier {\n    ...StoreLayout_notifier\n  }\n  viewer {\n    ...StoreLayout_viewer\n    id\n  }\n}\n\nfragment CategoryHero_category on Category {\n  name\n  coverImage\n}\n\nfragment ProductsGrid_products on ProductConnection {\n  edges {\n    node {\n      id\n      name\n      mainImage\n      price\n    }\n  }\n}\n\nfragment StoreLayout_notifier on Notifier {\n  message\n  ...Notifier_notifier\n}\n\nfragment StoreLayout_viewer on User {\n  isAdmin\n  ...AdminFooter_viewer\n}\n\nfragment AdminFooter_viewer on User {\n  displayName\n}\n\nfragment Notifier_notifier on Notifier {\n  message\n}\n"
};

module.exports = batch;
