/**
 * @flow
 * @relayHash 13e4b9896fabcfd9bdcbcce8f5ff32eb
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type loginUserToAdminMutationVariables = {|
  input: {
    email: string;
    password: string;
    clientMutationId?: ?string;
  };
|};

export type loginUserToAdminMutationResponse = {|
  +loginUser: ?{|
    +token: ?string;
  |};
|};
*/


/*
mutation loginUserToAdminMutation(
  $input: LoginUserInput!
) {
  loginUser(input: $input) {
    token
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LoginUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginUserToAdminMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LoginUserInput!"
          }
        ],
        "concreteType": "LoginUserPayload",
        "name": "loginUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
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
  "name": "loginUserToAdminMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "LoginUserInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "loginUserToAdminMutation",
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
            "type": "LoginUserInput!"
          }
        ],
        "concreteType": "LoginUserPayload",
        "name": "loginUser",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "token",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation loginUserToAdminMutation(\n  $input: LoginUserInput!\n) {\n  loginUser(input: $input) {\n    token\n  }\n}\n"
};

module.exports = batch;
