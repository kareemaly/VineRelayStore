/**
 * @flow
 * @relayHash ed4ef1af0fca29e2f90d7aa2ff9f1038
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateProductMutationVariables = {|
  input: {
    id: string;
    name: string;
    slug?: ?string;
    price: number;
    mainImage?: ?string;
    brandId: string;
    categoryId: string;
    clientMutationId?: ?string;
  };
|};

export type updateProductMutationResponse = {|
  +updateProduct: ?{|
    +product: ?{| |};
  |};
|};
*/


/*
mutation updateProductMutation(
  $input: UpdateProductInput!
) {
  updateProduct(input: $input) {
    product {
      ...EditProduct_product
      id
    }
  }
}

fragment EditProduct_product on Product {
  id
  name
  slug
  mainImage
  price
  brand {
    id
  }
  category {
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateProductInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateProductMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateProductInput!"
          }
        ],
        "concreteType": "UpdateProductPayload",
        "name": "updateProduct",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "name": "product",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "EditProduct_product",
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
  "name": "updateProductMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateProductInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateProductMutation",
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
            "type": "UpdateProductInput!"
          }
        ],
        "concreteType": "UpdateProductPayload",
        "name": "updateProduct",
        "plural": false,
        "selections": [
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
                "name": "slug",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "mainImage",
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
              },
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
        "storageKey": null
      }
    ]
  },
  "text": "mutation updateProductMutation(\n  $input: UpdateProductInput!\n) {\n  updateProduct(input: $input) {\n    product {\n      ...EditProduct_product\n      id\n    }\n  }\n}\n\nfragment EditProduct_product on Product {\n  id\n  name\n  slug\n  mainImage\n  price\n  brand {\n    id\n  }\n  category {\n    id\n  }\n}\n"
};

module.exports = batch;
