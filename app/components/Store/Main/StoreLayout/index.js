import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

export default StoreLayout;
