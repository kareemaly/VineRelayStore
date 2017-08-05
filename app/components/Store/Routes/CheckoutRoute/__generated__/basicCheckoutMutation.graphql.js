/**
 * @flow
 * @relayHash 13fb461aef927d057540de2379865132
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type basicCheckoutMutationVariables = {|
  input: {
    firstName: string;
    lastName: string;
    email: string;
    addressLine1: string;
    addressLine2?: ?string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    items?: ?$ReadOnlyArray<?{
      quantity: number;
      product: string;
    }>;
    clientMutationId?: ?string;
  };
|};

export type basicCheckoutMutationResponse = {|
  +basicCheckout: ?{|
    +order: ?{|
      +orderNumber: string;
    |};
  |};
|};
*/


/*
mutation basicCheckoutMutation(
  $input: BasicCheckoutInput!
) {
  basicCheckout(input: $input) {
    order {
      orderNumber
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
        "type": "BasicCheckoutInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "basicCheckoutMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "BasicCheckoutInput!"
          }
        ],
        "concreteType": "BasicCheckoutPayload",
        "name": "basicCheckout",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Order",
            "name": "order",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "orderNumber",
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
  "name": "basicCheckoutMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "BasicCheckoutInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "basicCheckoutMutation",
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
            "type": "BasicCheckoutInput!"
          }
        ],
        "concreteType": "BasicCheckoutPayload",
        "name": "basicCheckout",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Order",
            "name": "order",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "orderNumber",
                "storageKey": null
              },
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
  "text": "mutation basicCheckoutMutation(\n  $input: BasicCheckoutInput!\n) {\n  basicCheckout(input: $input) {\n    order {\n      orderNumber\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
