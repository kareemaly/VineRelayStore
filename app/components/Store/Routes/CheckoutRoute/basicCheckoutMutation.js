import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation basicCheckoutMutation(
    $input: BasicCheckoutInput!
  ) {
    basicCheckout(input: $input) {
      order {
        orderNumber
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
