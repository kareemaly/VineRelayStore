/**
 * @flow
 * @relayHash 0baaf9361487092109f1e03f2d5926e0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type removeBrandMutationVariables = {|
  input: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type removeBrandMutationResponse = {|
  +removeBrand: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation removeBrandMutation(
  $input: RemoveBrandInput!
) {
  removeBrand(input: $input) {
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
        "type": "RemoveBrandInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "removeBrandMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "RemoveBrandInput!"
          }
        ],
        "concreteType": "RemoveBrandPayload",
        "name": "removeBrand",
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
  "name": "removeBrandMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "RemoveBrandInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "removeBrandMutation",
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
            "type": "RemoveBrandInput!"
          }
        ],
        "concreteType": "RemoveBrandPayload",
        "name": "removeBrand",
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
  "text": "mutation removeBrandMutation(\n  $input: RemoveBrandInput!\n) {\n  removeBrand(input: $input) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
