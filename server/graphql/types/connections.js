import {
  connectionDefinitions
} from 'graphql-relay';

import IoC from 'AppIoC';

const brandsConnectionType = brandType => connectionDefinitions({
  nodeType: brandType
}).connectionType;

const usersConnectionType = userType => connectionDefinitions({
  nodeType: userType
}).connectionType;

IoC.callableMany([
  ['brandsConnectionType', ['brandType'], brandsConnectionType],
  ['usersConnectionType', ['userType'], usersConnectionType],
]);
