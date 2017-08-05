/**
 * @flow
 * @relayHash cd6fc1ce0a12c432971f202d949fea24
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type removeOrderMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type removeOrderMutationResponse = {|
  +removeOrder: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation removeOrderMutation(
  $input: RemoveOrderInput!
) {
  removeOrder(input: $input) {
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
        "type": "RemoveOrderInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "removeOrderMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveOrderInput!"
          }
        ],
        "concreteType": "RemoveOrderPayload",
        "name": "removeOrder",
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
  "name": "removeOrderMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveOrderInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "removeOrderMutation",
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
            "type": "RemoveOrderInput!"
          }
        ],
        "concreteType": "RemoveOrderPayload",
        "name": "removeOrder",
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
  "text": "mutation removeOrderMutation(\n  $input: RemoveOrderInput!\n) {\n  removeOrder(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
