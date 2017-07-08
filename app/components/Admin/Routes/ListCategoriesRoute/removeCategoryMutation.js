import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation removeCategoryMutation(
    $input: RemoveCategoryInput!
  ) {
    removeCategory(input: $input) {
      deletedId
    }
  }
`;

const updater = (id, recordSelector) => {
  const categoriesRecord = recordSelector.getRoot().getLinkedRecord('categories');

  // Get linked edges
  const edges = categoriesRecord.getLinkedRecords('edges');

  // Remove edge by matching node ids
  const newEdges = edges.filter((edge) => edge.getLinkedRecord('node').getDataID() !== id);

  // Update categories record with the new edges after the deletion
  categoriesRecord.setLinkedRecords(newEdges, 'edges');
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
