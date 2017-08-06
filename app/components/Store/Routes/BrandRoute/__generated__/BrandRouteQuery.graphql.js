/**
 * @flow
 * @relayHash 8d9a7eacfbeedbee22cdc5f4bcc43b07
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type BrandRouteQueryResponse = {|
  +node: ?{|
    +id: string;
    +description?: ?string;
  |};
  +products: ?{| |};
  +viewer: {| |};
  +notifier: ?{| |};
|};
*/


/*
query BrandRouteQuery(
  $brandId: ID!
) {
  node(id: $brandId) {
    __typename
    id
    ... on Brand {
      description
    }
    ...BrandHero_brand
  }
  products(brandId: $brandId) {
    ...ProductsGrid_products
  }
  viewer {
    ...StoreLayout_viewer
    id
  }
  notifier {
    ...StoreLayout_notifier
  }
}

fragment BrandHero_brand on Brand {
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

fragment StoreLayout_viewer on User {
  isAdmin
  ...AdminFooter_viewer
}

fragment StoreLayout_notifier on Notifier {
  message
  ...Notifier_notifier
}

fragment Notifier_notifier on Notifier {
  message
}

fragment AdminFooter_viewer on User {
  isAdmin
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
    "name": "BrandRouteQuery",
    "selections": [
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
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "BrandHero_brand",
            "args": null
          },
          {
            "kind": "InlineFragment",
            "type": "Brand",
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
            "name": "brandId",
            "variableName": "brandId",
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
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "BrandRouteQuery",
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
    "name": "BrandRouteQuery",
    "operation": "query",
    "selections": [
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
            "name": "brandId",
            "variableName": "brandId",
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
      }
    ]
  },
  "text": "query BrandRouteQuery(\n  $brandId: ID!\n) {\n  node(id: $brandId) {\n    __typename\n    id\n    ... on Brand {\n      description\n    }\n    ...BrandHero_brand\n  }\n  products(brandId: $brandId) {\n    ...ProductsGrid_products\n  }\n  viewer {\n    ...StoreLayout_viewer\n    id\n  }\n  notifier {\n    ...StoreLayout_notifier\n  }\n}\n\nfragment BrandHero_brand on Brand {\n  name\n  coverImage\n}\n\nfragment ProductsGrid_products on ProductConnection {\n  edges {\n    node {\n      id\n      name\n      mainImage\n      price\n    }\n  }\n}\n\nfragment StoreLayout_viewer on User {\n  isAdmin\n  ...AdminFooter_viewer\n}\n\nfragment StoreLayout_notifier on Notifier {\n  message\n  ...Notifier_notifier\n}\n\nfragment Notifier_notifier on Notifier {\n  message\n}\n\nfragment AdminFooter_viewer on User {\n  isAdmin\n}\n"
};

module.exports = batch;
