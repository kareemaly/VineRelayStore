import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
`;

class StoreLayout extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <PageWrapper>
        {children}
      </PageWrapper>
    );
  }
}

export default createFragmentContainer(
  StoreLayout,
  graphql`
    fragment StoreLayout_viewer on User {
      displayName
      firstName
      lastName
      email
    }
  `
);

