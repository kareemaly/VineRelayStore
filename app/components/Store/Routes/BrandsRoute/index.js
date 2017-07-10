import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import BrandsGrid from 'app/components/Store/Brand/BrandsGrid';

const Title = styled.h2`
`;

class BrandsRoute extends React.Component {
  render() {
    const {
      brands,
      history,
    } = this.props;

    return (
      <StoreLayout>
        <Title>
          Brands
        </Title>
        <BrandsGrid
          brands={brands}
          onBrandClick={(id) => history.push(`brand/${id}`)}
        />
      </StoreLayout>
    );
  }
}

const BrandsRouteContainer = createFragmentContainer(
  withRouter(BrandsRoute),
  graphql`
    fragment BrandsRoute_brands on BrandConnection {
      ...BrandsGrid_brands
    }
  `
);

export default () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query BrandsRouteQuery {
        brands {
          ...BrandsRoute_brands
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (props) {
        return <BrandsRouteContainer {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
