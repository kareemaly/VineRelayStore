import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, graphql } from 'react-relay';
import StoreLayout from 'app/components/Store/Main/StoreLayout';

class HomeRoute extends React.Component {
  render() {
    const {
      viewer,
    } = this.props;

    return (
      <StoreLayout viewer={viewer}>
        <div>Welcome to store web application {viewer.firstName}!</div>
      </StoreLayout>
    );
  }
}

export default createFragmentContainer(
  withRouter(HomeRoute),
  graphql`
    fragment HomeRoute_viewer on User {
      firstName
      isAdmin
      ...StoreLayout_viewer
    }
  `
);
