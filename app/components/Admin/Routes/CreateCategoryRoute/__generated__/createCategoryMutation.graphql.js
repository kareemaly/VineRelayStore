/**
 * @flow
 * @relayHash 94b6a6ea1485bf07788f0cbb4879d238
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createCategoryMutationVariables = {|
  input: {
    name: string;
    slug?: ?string;
    clientMutationId?: ?string;
  };
|};

export type createCategoryMutationResponse = {|
  +createCategory: ?{|
    +category: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
mutation createCategoryMutation(
  $input: CreateCategoryInput!
) {
  createCategory(input: $input) {
    category {
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
        "type": "CreateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createCategoryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateCategoryInput!"
          }
        ],
        "concreteType": "CreateCategoryPayload",
        "name": "createCategory",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "name": "category",
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
  "name": "createCategoryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createCategoryMutation",
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
            "type": "CreateCategoryInput!"
          }
        ],
        "concreteType": "CreateCategoryPayload",
        "name": "createCategory",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "name": "category",
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
  "text": "mutation createCategoryMutation(\n  $input: CreateCategoryInput!\n) {\n  createCategory(input: $input) {\n    category {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
