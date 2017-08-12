import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation updateCategoryMutation(
    $input: UpdateCategoryInput!
  ) {
    updateCategory(input: $input) {
      category {
        id
        name
        slug
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
