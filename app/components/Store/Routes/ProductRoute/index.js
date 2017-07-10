import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import ProductDetails from 'app/components/Store/Product/ProductDetails';
import AdminFooter from 'app/components/Store/Main/AdminFooter';
import Button from 'app/components/Store/Main/Button';

class ProductRoute extends React.Component {
  render() {
    const {
      viewer,
      product,
      history,
    } = this.props;

    return (
      <StoreLayout>
        <ProductDetails
          product={product}
        />
        {
          viewer.isAdmin &&
          <AdminFooter>
            <Button onClick={() => history.push(`/admin/product/${product.id}`)}>
              Edit product
            </Button>
          </AdminFooter>
        }
      </StoreLayout>
    );
  }
}

const ProductRouteContainer = createFragmentContainer(
  withRouter(ProductRoute),
  graphql`
    fragment ProductRoute_viewer on User {
      isAdmin
    }

    fragment ProductRoute_product on Product {
      id
      ...ProductDetails_product
    }
  `
);

export default ({ match }) => {
  const productId = match.params.productId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query ProductRouteQuery($productId: ID!) {
          viewer {
            ...ProductRoute_viewer
          }

          node(id: $productId) {
            ...ProductRoute_product
          }
        }
      `}
      variables={{
        productId,
      }}
      render={({ error, props }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (props) {
          return (
            <ProductRouteContainer
              product={props.node}
              viewer={props.viewer}
            />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
