/**
 * @flow
 * @relayHash 366b4dd13d0533e174fbffea1776e3cd
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type removeCategoryMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type removeCategoryMutationResponse = {|
  +removeCategory: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation removeCategoryMutation(
  $input: RemoveCategoryInput!
) {
  removeCategory(input: $input) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "removeCategoryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveCategoryInput!"
          }
        ],
        "concreteType": "RemoveCategoryPayload",
        "name": "removeCategory",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
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
  "name": "removeCategoryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "removeCategoryMutation",
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
            "type": "RemoveCategoryInput!"
          }
        ],
        "concreteType": "RemoveCategoryPayload",
        "name": "removeCategory",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation removeCategoryMutation(\n  $input: RemoveCategoryInput!\n) {\n  removeCategory(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
