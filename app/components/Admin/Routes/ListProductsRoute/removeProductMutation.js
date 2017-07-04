import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation removeProductMutation(
    $input: RemoveProductInput!
  ) {
    removeProduct(input: $input) {
      deletedId
    }
  }
`;

const updater = (id, recordSelector) => {
  const productsRecord = recordSelector.getRoot().getLinkedRecord('products');

  // Get linked edges
  const edges = productsRecord.getLinkedRecords('edges');

  // Remove edge by matching node ids
  const newEdges = edges.filter((edge) => edge.getLinkedRecord('node').getDataID() !== id);

  // Update products record with the new edges after the deletion
  productsRecord.setLinkedRecords(newEdges, 'edges');
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
