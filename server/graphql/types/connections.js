import {
  connectionDefinitions
} from 'graphql-relay';

import IoC from 'AppIoC';

const brandsConnectionType = brandType => connectionDefinitions({
  nodeType: brandType
}).connectionType;

const productsConnectionType = productType => connectionDefinitions({
  nodeType: productType
}).connectionType;

const categoriesConnectionType = productType => connectionDefinitions({
  nodeType: productType
}).connectionType;

const usersConnectionType = userType => connectionDefinitions({
  nodeType: userType
}).connectionType;

const ordersConnectionType = orderType => connectionDefinitions({
  nodeType: orderType
}).connectionType;

const orderItemsConnectionType = orderItemType => connectionDefinitions({
  nodeType: orderItemType
}).connectionType;

IoC.callableMany([
  ['brandsConnectionType', ['brandType'], brandsConnectionType],
  ['categoriesConnectionType', ['categoryType'], categoriesConnectionType],
  ['productsConnectionType', ['productType'], productsConnectionType],
  ['usersConnectionType', ['userType'], usersConnectionType],
  ['ordersConnectionType', ['orderType'], ordersConnectionType],
  ['orderItemsConnectionType', ['orderItemType'], orderItemsConnectionType],
]);
