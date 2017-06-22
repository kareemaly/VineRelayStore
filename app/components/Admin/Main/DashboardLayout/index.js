import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import styled from 'styled-components';

const PageWrapper = styled.div`
`;

class DashboardLayout extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <PageWrapper>
        <div>
          header {this.props.viewer.lastName}
        </div>
        {children}
      </PageWrapper>
    );
  }
}

export default createFragmentContainer(
  DashboardLayout,
  graphql`
    fragment DashboardLayout_viewer on User {
      displayName
      firstName
      lastName
      email
    }
  `
);
