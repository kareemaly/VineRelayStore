/**
 * @flow
 * @relayHash a116f70d4f31f8a47fc6d2486363bb95
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createBrandMutationVariables = {|
  input: {
    name: string;
    slug?: ?string;
    clientMutationId?: ?string;
  };
|};

export type createBrandMutationResponse = {|
  +createBrand: ?{|
    +brand: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation createBrandMutation(
  $input: CreateBrandInput!
) {
  createBrand(input: $input) {
    brand {
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
        "type": "CreateBrandInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createBrandMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateBrandInput!"
          }
        ],
        "concreteType": "CreateBrandPayload",
        "name": "createBrand",
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
  "name": "createBrandMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateBrandInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createBrandMutation",
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
            "type": "CreateBrandInput!"
          }
        ],
        "concreteType": "CreateBrandPayload",
        "name": "createBrand",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation createBrandMutation(\n  $input: CreateBrandInput!\n) {\n  createBrand(input: $input) {\n    brand {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
