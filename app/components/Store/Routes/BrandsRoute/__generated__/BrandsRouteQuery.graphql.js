/**
 * @flow
 * @relayHash 8ddde9c5fd27a7e3f32af6aa1fbe6c5c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type BrandsRouteQueryResponse = {|
  +brands: ?{| |};
  +notifier: ?{| |};
  +viewer: {| |};
|};
*/


/*
query BrandsRouteQuery {
  brands {
    ...BrandsGrid_brands
  }
  notifier {
    ...StoreLayout_notifier
  }
  viewer {
    ...StoreLayout_viewer
    id
  }
}

fragment BrandsGrid_brands on BrandConnection {
  edges {
    node {
      id
      name
      coverImage
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BrandsRouteQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "BrandConnection",
        "name": "brands",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BrandsGrid_brands",
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
  "name": "BrandsRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "BrandsRouteQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "BrandConnection",
        "name": "brands",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BrandEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Brand",
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
                    "name": "coverImage",
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
  "text": "query BrandsRouteQuery {\n  brands {\n    ...BrandsGrid_brands\n  }\n  notifier {\n    ...StoreLayout_notifier\n  }\n  viewer {\n    ...StoreLayout_viewer\n    id\n  }\n}\n\nfragment BrandsGrid_brands on BrandConnection {\n  edges {\n    node {\n      id\n      name\n      coverImage\n    }\n  }\n}\n\nfragment StoreLayout_notifier on Notifier {\n  message\n  ...Notifier_notifier\n}\n\nfragment StoreLayout_viewer on User {\n  isAdmin\n  ...AdminFooter_viewer\n}\n\nfragment AdminFooter_viewer on User {\n  displayName\n}\n\nfragment Notifier_notifier on Notifier {\n  message\n}\n"
};

module.exports = batch;
