import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation updateProductMutation(
    $input: UpdateProductInput!
  ) {
    updateProduct(input: $input) {
      product {
        ...EditProduct_product
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
