/**
 * @flow
 * @relayHash 7c9e388661a9d93daf61fca92b8c34aa
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createProductMutationVariables = {|
  input: {
    name: string;
    slug?: ?string;
    price: number;
    brandId: string;
    categoryId: string;
    clientMutationId?: ?string;
  };
|};

export type createProductMutationResponse = {|
  +createProduct: ?{|
    +product: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation createProductMutation(
  $input: CreateProductInput!
) {
  createProduct(input: $input) {
    product {
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateProductInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createProductMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateProductInput!"
          }
        ],
        "concreteType": "CreateProductPayload",
        "name": "createProduct",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "name": "product",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
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
  "name": "createProductMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateProductInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createProductMutation",
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
            "type": "CreateProductInput!"
          }
        ],
        "concreteType": "CreateProductPayload",
        "name": "createProduct",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "name": "product",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
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
  "text": "mutation createProductMutation(\n  $input: CreateProductInput!\n) {\n  createProduct(input: $input) {\n    product {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
