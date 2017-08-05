/**
 * @flow
 * @relayHash 8c57318c9e40624e9cc29bc1b0e64202
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type BrandsRouteQueryResponse = {|
  +brands: ?{| |};
|};
*/


/*
query BrandsRouteQuery {
  brands {
    ...BrandsGrid_brands
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
      }
    ]
  },
  "text": "query BrandsRouteQuery {\n  brands {\n    ...BrandsGrid_brands\n  }\n}\n\nfragment BrandsGrid_brands on BrandConnection {\n  edges {\n    node {\n      id\n      name\n      coverImage\n    }\n  }\n}\n"
};

module.exports = batch;
