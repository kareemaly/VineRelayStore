import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DefaultRoute from './DefaultRoute';

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
        return <DefaultRoute {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
