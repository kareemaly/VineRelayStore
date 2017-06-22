import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, graphql } from 'react-relay';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';

class DefaultRoute extends React.Component {
  componentWillMount() {
    // Not an admin so we need to change route
    if(! this.props.viewer.isAdmin) {
      this.props.history.replace(`/admin/login`);
    }
  }

  render() {
    const {
      viewer,
    } = this.props;

    return (
      <DashboardLayout viewer={viewer}>
        <div>Welcome to dashboard {viewer.firstName}!</div>
      </DashboardLayout>
    );
  }
}

export default createFragmentContainer(
  withRouter(DefaultRoute),
  graphql`
    fragment DefaultRoute_viewer on User {
      firstName
      isAdmin
      ...DashboardLayout_viewer
    }
  `
);
