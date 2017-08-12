import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation updateOrderStatusMutation(
    $input: UpdateOrderStatusInput!
  ) {
    updateOrderStatus(input: $input) {
      order {
        ...ViewOrder_order
      }
    }
  }
`;

export default (input, onCompleted, onError) => {
  const variables = {
    input,
  };

  commitMutation(
    relayEnvironment,
    {
      mutation,
      variables,
      onCompleted,
      onError,
    },
  );
};
