/**
 * @flow
 * @relayHash a56a7926ee021a5bda5108b616ecc29d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ListBrandsRouteQueryResponse = {|
  +viewer: {|
    +isAdmin: ?boolean;
  |};
  +brands: ?{| |};
|};
*/


/*
query ListBrandsRouteQuery {
  viewer {
    isAdmin
    ...DashboardLayout_viewer
    id
  }
  brands {
    ...ListBrands_brands
  }
}

fragment DashboardLayout_viewer on User {
  displayName
  firstName
  lastName
  email
}

fragment ListBrands_brands on BrandConnection {
  edges {
    node {
      id
      name
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListBrandsRouteQuery",
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
        "args": null,
        "concreteType": "BrandConnection",
        "name": "brands",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListBrands_brands",
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
  "name": "ListBrandsRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ListBrandsRouteQuery",
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
  "text": "query ListBrandsRouteQuery {\n  viewer {\n    isAdmin\n    ...DashboardLayout_viewer\n    id\n  }\n  brands {\n    ...ListBrands_brands\n  }\n}\n\nfragment DashboardLayout_viewer on User {\n  displayName\n  firstName\n  lastName\n  email\n}\n\nfragment ListBrands_brands on BrandConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n"
};

module.exports = batch;
