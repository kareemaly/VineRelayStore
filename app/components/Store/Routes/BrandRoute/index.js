import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import BrandHeader from 'app/components/Store/Brand/BrandHeader';
import BrandHero from 'app/components/Store/Brand/BrandHero';
import ProductsGrid from 'app/components/Store/Product/ProductsGrid';
import AdminFooter from 'app/components/Store/Main/AdminFooter';
import Button from 'app/components/Store/Main/Button';

class BrandRoute extends React.Component {
  render() {
    const {
      brand,
      viewer,
      products,
      history,
    } = this.props;

    return (
      <StoreLayout>
        <BrandHero
          brand={brand}
        />
        <BrandHeader
          brand={brand}
        />
        <ProductsGrid
          products={products}
          onProductClick={(id) => history.push(`/product/${id}`)}
        />
        {
          viewer.isAdmin &&
          <AdminFooter>
            <Button onClick={() => history.push(`/admin/brand/${brand.id}`)}>
              Edit brand
            </Button>
          </AdminFooter>
        }
      </StoreLayout>
    );
  }
}

const BrandRouteContainer = createFragmentContainer(
  withRouter(BrandRoute),
  graphql`
    fragment BrandRoute_viewer on User {
      isAdmin
    }

    fragment BrandRoute_brand on Brand {
      id
      ...BrandHeader_brand
      ...BrandHero_brand
    }

    fragment BrandRoute_products on ProductConnection {
      ...ProductsGrid_products
    }
  `
);

export default ({ match }) => {
  const brandId = match.params.brandId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query BrandRouteQuery($brandId: ID!, $brandActualId: String!) {
          viewer {
            ...BrandRoute_viewer
          }

          node(id: $brandId) {
            ...BrandRoute_brand
          }

          products(brand: $brandActualId) {
            ...BrandRoute_products
          }
        }
      `}
      variables={{
        brandId,
        brandActualId: '',
      }}
      render={({ error, props }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (props) {
          return (
            <BrandRouteContainer
              brand={props.node}
              products={props.products}
              viewer={props.viewer}
            />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
