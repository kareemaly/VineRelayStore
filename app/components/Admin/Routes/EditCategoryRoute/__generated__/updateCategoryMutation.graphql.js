/**
 * @flow
 * @relayHash ec8d7419852a5c40c5321f8003c783a5
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateCategoryMutationVariables = {|
  input: {
    id: string;
    name: string;
    slug?: ?string;
    description?: ?string;
    logoImage?: ?string;
    coverImage?: ?string;
    clientMutationId?: ?string;
  };
|};

export type updateCategoryMutationResponse = {|
  +updateCategory: ?{|
    +category: ?{|
      +id: string;
      +name: string;
      +slug: string;
    |};
  |};
|};
*/


/*
mutation updateCategoryMutation(
  $input: UpdateCategoryInput!
) {
  updateCategory(input: $input) {
    category {
      id
      name
      slug
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
        "type": "UpdateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateCategoryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateCategoryInput!"
          }
        ],
        "concreteType": "UpdateCategoryPayload",
        "name": "updateCategory",
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
                "name": "slug",
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
  "name": "updateCategoryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateCategoryMutation",
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
            "type": "UpdateCategoryInput!"
          }
        ],
        "concreteType": "UpdateCategoryPayload",
        "name": "updateCategory",
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
                "name": "slug",
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
  "text": "mutation updateCategoryMutation(\n  $input: UpdateCategoryInput!\n) {\n  updateCategory(input: $input) {\n    category {\n      id\n      name\n      slug\n    }\n  }\n}\n"
};

module.exports = batch;
