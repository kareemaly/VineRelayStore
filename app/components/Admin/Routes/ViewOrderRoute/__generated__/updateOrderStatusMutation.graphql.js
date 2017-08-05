/**
 * @flow
 * @relayHash f718fddeb05c30e57437c68a4b3fd71b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateOrderStatusMutationVariables = {|
  input: {
    id: string;
    status: string;
    clientMutationId?: ?string;
  };
|};

export type updateOrderStatusMutationResponse = {|
  +updateOrderStatus: ?{|
    +order: {| |};
  |};
|};
*/


/*
mutation updateOrderStatusMutation(
  $input: UpdateOrderStatusInput!
) {
  updateOrderStatus(input: $input) {
    order {
      ...ViewOrder_order
      id
    }
  }
}

fragment ViewOrder_order on Order {
  id
  orderNumber
  firstName
  lastName
  email
  addressLine1
  addressLine2
  city
  state
  zipCode
  phoneNumber
  status
  items {
    id
    quantity
    product {
      id
      name
      price
      mainImage
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
        "type": "UpdateOrderStatusInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateOrderStatusMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateOrderStatusInput!"
          }
        ],
        "concreteType": "UpdateOrderStatusPayload",
        "name": "updateOrderStatus",
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
                "kind": "FragmentSpread",
                "name": "ViewOrder_order",
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
  "name": "updateOrderStatusMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateOrderStatusInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateOrderStatusMutation",
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
            "type": "UpdateOrderStatusInput!"
          }
        ],
        "concreteType": "UpdateOrderStatusPayload",
        "name": "updateOrderStatus",
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
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "type": "Order",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "addressLine2",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "firstName",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "lastName",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "email",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "addressLine1",
                    "storageKey": null
                  },
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
                    "name": "city",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "state",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "zipCode",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "phoneNumber",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "OrderItem",
                    "name": "items",
                    "plural": true,
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
                        "name": "quantity",
                        "storageKey": null
                      },
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
                            "name": "price",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "mainImage",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation updateOrderStatusMutation(\n  $input: UpdateOrderStatusInput!\n) {\n  updateOrderStatus(input: $input) {\n    order {\n      ...ViewOrder_order\n      id\n    }\n  }\n}\n\nfragment ViewOrder_order on Order {\n  id\n  orderNumber\n  firstName\n  lastName\n  email\n  addressLine1\n  addressLine2\n  city\n  state\n  zipCode\n  phoneNumber\n  status\n  items {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n      mainImage\n    }\n  }\n}\n"
};

module.exports = batch;
