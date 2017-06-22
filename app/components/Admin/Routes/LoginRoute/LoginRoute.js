import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class LoginRoute extends React.Component {
  render() {
    return (
      <div>
        <div>Login dude you cant just come here without a token</div>
        {this.props.viewer.firstName}
      </div>
    );
  }
}

export default createFragmentContainer(
  LoginRoute,
  graphql`
    fragment LoginRoute_viewer on User {
      displayName
      firstName
      lastName
      email
    }
  `
);
