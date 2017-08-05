/**
 * @flow
 * @relayHash 43dfd87ed9e9b471ab5cc95414a7dbb3
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CategoryRouteQueryResponse = {|
  +viewer: {|
    +isAdmin: ?boolean;
  |};
  +node: ?{|
    +id: string;
    +description?: ?string;
  |};
  +products: ?{| |};
|};
*/


/*
query CategoryRouteQuery(
  $categoryId: ID!
) {
  viewer {
    isAdmin
    ...AdminFooter_viewer
    id
  }
  node(id: $categoryId) {
    __typename
    id
    ... on Category {
      description
    }
    ...CategoryHero_category
    ...CategoryHeader_category
  }
  products(categoryId: $categoryId) {
    ...ProductsGrid_products
  }
}

fragment AdminFooter_viewer on User {
  isAdmin
}

fragment CategoryHero_category on Category {
  name
  coverImage
}

fragment CategoryHeader_category on Category {
  name
  ...CategoryLogo_category
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

fragment CategoryLogo_category on Category {
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
    "name": "CategoryRouteQuery",
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
            "name": "AdminFooter_viewer",
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
            "kind": "FragmentSpread",
            "name": "CategoryHeader_category",
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
      }
    ]
  },
  "text": "query CategoryRouteQuery(\n  $categoryId: ID!\n) {\n  viewer {\n    isAdmin\n    ...AdminFooter_viewer\n    id\n  }\n  node(id: $categoryId) {\n    __typename\n    id\n    ... on Category {\n      description\n    }\n    ...CategoryHero_category\n    ...CategoryHeader_category\n  }\n  products(categoryId: $categoryId) {\n    ...ProductsGrid_products\n  }\n}\n\nfragment AdminFooter_viewer on User {\n  isAdmin\n}\n\nfragment CategoryHero_category on Category {\n  name\n  coverImage\n}\n\nfragment CategoryHeader_category on Category {\n  name\n  ...CategoryLogo_category\n}\n\nfragment ProductsGrid_products on ProductConnection {\n  edges {\n    node {\n      id\n      name\n      mainImage\n      price\n    }\n  }\n}\n\nfragment CategoryLogo_category on Category {\n  logoImage\n}\n"
};

module.exports = batch;
