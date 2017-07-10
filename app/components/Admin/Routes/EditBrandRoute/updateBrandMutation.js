import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation updateBrandMutation(
    $input: UpdateBrandInput!
  ) {
    updateBrand(input: $input) {
      brand {
        ...EditBrandRoute_brand
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
}
