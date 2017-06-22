import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import LoginRoute from './LoginRoute';

export default ({ render }) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query LoginRouteQuery {
        viewer {
          ...LoginRoute_viewer
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (props) {
        return <LoginRoute {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
