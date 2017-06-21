import { fromGlobalId } from 'graphql-relay';

/**
 * Get actual id from relay global id
 * @param  {string} relayId
 * @return {string}
 */
export const getActualId = (relayId) => {
  return fromGlobalId(relayId).id;
}

/**
 * Get actual ids from relay global ids
 * @param  {Array<string>} relayIds
 * @return {string}
 */
export const getActualIds = (relayIds) => relayIds.map(getActualId);
