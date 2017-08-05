/**
 * @flow
 * @relayHash 69c8a96fb1d7d61fbe4ab3a767057a39
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AboutRouteQueryResponse = {|
  +notifier: ?{| |};
|};
*/


/*
query AboutRouteQuery {
  notifier {
    ...StoreLayout_notifier
  }
}

fragment StoreLayout_notifier on Notifier {
  message
  ...Notifier_notifier
}

fragment Notifier_notifier on Notifier {
  message
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AboutRouteQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Notifier",
        "name": "notifier",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "StoreLayout_notifier",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AboutRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AboutRouteQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Notifier",
        "name": "notifier",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AboutRouteQuery {\n  notifier {\n    ...StoreLayout_notifier\n  }\n}\n\nfragment StoreLayout_notifier on Notifier {\n  message\n  ...Notifier_notifier\n}\n\nfragment Notifier_notifier on Notifier {\n  message\n}\n"
};

module.exports = batch;
