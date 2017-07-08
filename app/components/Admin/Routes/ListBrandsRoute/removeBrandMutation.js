import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation removeBrandMutation(
    $input: RemoveBrandInput!
  ) {
    removeBrand(input: $input) {
      deletedId
    }
  }
`;

const updater = (id, recordSelector) => {
  const brandsRecord = recordSelector.getRoot().getLinkedRecord('brands');

  // Get linked edges
  const edges = brandsRecord.getLinkedRecords('edges');

  // Remove edge by matching node ids
  const newEdges = edges.filter((edge) => edge.getLinkedRecord('node').getDataID() !== id);

  // Update brands record with the new edges after the deletion
  brandsRecord.setLinkedRecords(newEdges, 'edges');
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
