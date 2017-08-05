/**
 * @flow
 * @relayHash 0691058c75b838ee0104fde159c1d08f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CheckoutThanksRouteQueryResponse = {|
  +notifier: ?{| |};
|};
*/


/*
query CheckoutThanksRouteQuery {
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
    "name": "CheckoutThanksRouteQuery",
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
  "name": "CheckoutThanksRouteQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "CheckoutThanksRouteQuery",
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
  "text": "query CheckoutThanksRouteQuery {\n  notifier {\n    ...StoreLayout_notifier\n  }\n}\n\nfragment StoreLayout_notifier on Notifier {\n  message\n  ...Notifier_notifier\n}\n\nfragment Notifier_notifier on Notifier {\n  message\n}\n"
};

module.exports = batch;
