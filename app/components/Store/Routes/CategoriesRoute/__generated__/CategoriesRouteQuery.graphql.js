/**
 * @flow
 * @relayHash 4197b056fd2b84e6ff98c4c01ee23456
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CategoriesRouteQueryResponse = {|
  +categories: ?{| |};
  +notifier: ?{| |};
|};
*/


/*
query CategoriesRouteQuery {
  categories {
    ...CategoriesGrid_categories
  }
  notifier {
    ...StoreLayout_notifier
  }
}

fragment CategoriesGrid_categories on CategoryConnection {
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

fragment Notifier_notifier on Notifier {
  message
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoriesRouteQuery",
    "selections": [
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
            "name": "CategoriesGrid_categories",
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
  "name": "CategoriesRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CategoriesRouteQuery",
    "operation": "query",
    "selections": [
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
      }
    ]
  },
  "text": "query CategoriesRouteQuery {\n  categories {\n    ...CategoriesGrid_categories\n  }\n  notifier {\n    ...StoreLayout_notifier\n  }\n}\n\nfragment CategoriesGrid_categories on CategoryConnection {\n  edges {\n    node {\n      id\n      name\n      coverImage\n    }\n  }\n}\n\nfragment StoreLayout_notifier on Notifier {\n  message\n  ...Notifier_notifier\n}\n\nfragment Notifier_notifier on Notifier {\n  message\n}\n"
};

module.exports = batch;
