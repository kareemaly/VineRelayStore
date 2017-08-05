/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type CreateCategoryRoute_viewer = {|
  +isAdmin: ?boolean;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateCategoryRoute_viewer",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "isAdmin",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DashboardLayout_viewer",
      "args": null
    }
  ],
  "type": "User"
};

module.exports = fragment;
