/**
 * @flow
 * @relayHash 2791f685342b7e06f5dc1e88df5d992b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type removeProductMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type removeProductMutationResponse = {|
  +removeProduct: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation removeProductMutation(
  $input: RemoveProductInput!
) {
  removeProduct(input: $input) {
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
        "type": "RemoveProductInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "removeProductMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveProductInput!"
          }
        ],
        "concreteType": "RemoveProductPayload",
        "name": "removeProduct",
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
  "name": "removeProductMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveProductInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "removeProductMutation",
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
            "type": "RemoveProductInput!"
          }
        ],
        "concreteType": "RemoveProductPayload",
        "name": "removeProduct",
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
  "text": "mutation removeProductMutation(\n  $input: RemoveProductInput!\n) {\n  removeProduct(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
