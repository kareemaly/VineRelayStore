/**
 * @flow
 * @relayHash d0ea33b3ffe0c84e0cc5c14309fdce35
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateBrandMutationVariables = {|
  input: {
    id: string;
    name: string;
    description?: ?string;
    slug?: ?string;
    coverImage?: ?string;
    logoImage?: ?string;
    clientMutationId?: ?string;
  };
|};

export type updateBrandMutationResponse = {|
  +updateBrand: ?{|
    +brand: ?{| |};
  |};
|};
*/


/*
mutation updateBrandMutation(
  $input: UpdateBrandInput!
) {
  updateBrand(input: $input) {
    brand {
      ...EditBrandRoute_brand
      id
    }
  }
}

fragment EditBrandRoute_brand on Brand {
  ...EditBrand_brand
}

fragment EditBrand_brand on Brand {
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
        "name": "input",
        "type": "UpdateBrandInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateBrandMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateBrandInput!"
          }
        ],
        "concreteType": "UpdateBrandPayload",
        "name": "updateBrand",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Brand",
            "name": "brand",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "EditBrandRoute_brand",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "updateBrandMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateBrandInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateBrandMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateBrandInput!"
          }
        ],
        "concreteType": "UpdateBrandPayload",
        "name": "updateBrand",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Brand",
            "name": "brand",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation updateBrandMutation(\n  $input: UpdateBrandInput!\n) {\n  updateBrand(input: $input) {\n    brand {\n      ...EditBrandRoute_brand\n      id\n    }\n  }\n}\n\nfragment EditBrandRoute_brand on Brand {\n  ...EditBrand_brand\n}\n\nfragment EditBrand_brand on Brand {\n  id\n  name\n  slug\n  description\n  coverImage\n  logoImage\n}\n"
};

module.exports = batch;
