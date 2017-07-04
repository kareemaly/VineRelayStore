import React from 'react';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import { withRouter } from 'react-router';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
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

const DefaultRouteContainer = createFragmentContainer(
  withRouter(DefaultRoute),
  graphql`
    fragment DefaultRoute_viewer on User {
      firstName
      isAdmin
      ...DashboardLayout_viewer
    }
  `
);

export default () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query DefaultRouteQuery {
        viewer {
          ...DefaultRoute_viewer
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (props) {
        return <DefaultRouteContainer {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
