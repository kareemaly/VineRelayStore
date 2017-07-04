import {
  commitMutation,
  graphql,
} from 'react-relay';
import relayEnvironment from 'app/config/relay';

const mutation = graphql`
  mutation loginUserToAdminMutation(
    $input: LoginUserInput!
  ) {
    loginUser(input: $input) {
      token
    }
  }
`;

export default ({ email, password }, onCompleted, onError) => {
  const variables = {
    input: { email, password },
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
