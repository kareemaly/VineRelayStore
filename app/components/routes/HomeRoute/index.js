import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import Profile from 'app/components/Test/Profile';

class HomeRoute extends React.Component {
  render() {
    const {
      viewer,
    } = this.props;

    return (
      <div>
        <div>Welcome!</div>
        <Profile
          viewer={viewer}
        />
      </div>
    );
  }
}

export default () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query HomeRouteQuery {
        viewer {
          ...Profile_viewer
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <HomeRoute viewer={props.viewer} />;
      }
      return <div>Loading</div>;
    }}
  />
);
