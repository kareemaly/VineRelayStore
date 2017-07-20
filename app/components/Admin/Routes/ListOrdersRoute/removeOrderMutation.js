import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation removeOrderMutation(
    $input: RemoveOrderInput!
  ) {
    removeOrder(input: $input) {
      deletedId
    }
  }
`;

const updater = (id, recordSelector) => {
  const ordersRecord = recordSelector.getRoot().getLinkedRecord('orders');

  // Get linked edges
  const edges = ordersRecord.getLinkedRecords('edges');

  // Remove edge by matching node ids
  const newEdges = edges.filter((edge) => edge.getLinkedRecord('node').getDataID() !== id);

  // Update orders record with the new edges after the deletion
  ordersRecord.setLinkedRecords(newEdges, 'edges');
}

export default (id, onCompleted, onError) => {
  const variables = {
    input: { id },
  };

  commitMutation(
    relayEnvironment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
      updater: (relaySource) => updater(id, relaySource),
    },
  );
}
