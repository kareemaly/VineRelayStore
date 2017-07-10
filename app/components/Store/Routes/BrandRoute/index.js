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
      node: brand,
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

export default (props) => {
  const brandId = props.match.params.brandId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query BrandRouteQuery($brandId: ID!) {
          viewer {
            isAdmin
          }

          node(id: $brandId) {
            id
            ...BrandHeader_brand
            ...BrandHero_brand
          }

          products(brandId: $brandId) {
            ...ProductsGrid_products
          }
        }
      `}
      variables={{
        brandId,
      }}
      render={({ error, props: relayProps }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (relayProps) {
          return (
            <BrandRoute {...props} {...relayProps} />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
