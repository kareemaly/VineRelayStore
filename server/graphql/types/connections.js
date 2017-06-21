import {
  connectionDefinitions
} from 'graphql-relay';

import IoC from 'AppIoC';

const usersConnectionType = userType => connectionDefinitions({
  nodeType: userType
}).connectionType;

IoC.callableMany([
  ['usersConnectionType', ['userType'], usersConnectionType],
]);
