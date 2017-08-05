/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type StoreLayout_notifier = {|
  +message: string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoreLayout_notifier",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "message",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Notifier_notifier",
      "args": null
    }
  ],
  "type": "Notifier"
};

module.exports = fragment;
