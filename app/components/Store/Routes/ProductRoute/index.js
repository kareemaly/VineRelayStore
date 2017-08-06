import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import Paper from 'app/components/Store/Main/Paper';
import ProductDetails from 'app/components/Store/Product/ProductDetails';
import AdminFooter from 'app/components/Store/Main/AdminFooter';
import Button from 'app/components/Store/Main/Button';
import { cartActions } from 'app/actions';
import { cartStore } from 'app/stores';


class ProductRoute extends React.Component {
  componentWillMount() {
    this.cartListener = cartStore.addListener(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.cartListener.remove();
  }

  isProductInCart = (product) => {
    return cartStore.hasItem(product.id);
  }

  onAddToCartClick = (product) => {
    if(cartStore.hasItem(product.id)) {
      // Remove product from cart
      cartActions.removeItem(product.id);
    } else {
      // Add product to cart
      cartActions.addItem(
        product.id,
        1, // Quantity
        product.price,
        product.name,
        product.mainImage
      );
    }
  }

  render() {
    const {
      viewer,
      node: product,
      history,
      notifier,
    } = this.props;

    return (
      <StoreLayout
        notifier={notifier}
        viewer={viewer}
        adminFooterContent={
          <Button primary onClick={() => history.push(`/admin/product/${product.id}`)}>
            Edit product
          </Button>
        }
      >
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <ProductDetails
            isProductInCart={this.isProductInCart}
            onAddToCartClick={this.onAddToCartClick}
            onHomeClick={() => history.push(`/`)}
            onBrandClick={(brand) => history.push(`/brand/${brand.id}`)}
            onCategoryClick={(category) => history.push(`/category/${category.id}`)}
            product={product}
          />
        </Paper>
      </StoreLayout>
    );
  }
}

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query ProductRouteQuery($productId: ID!) {
        node(id: $productId) {
          id
          ...ProductDetails_product
        }
        notifier {
          ...StoreLayout_notifier
        }
        viewer {
          ...StoreLayout_viewer
        }
      }
    `}
    variables={{
      productId: props.match.params.productId,
    }}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return (
          <ProductRoute {...props} {...relayProps} />
        );
      }

      return <PageLoader />;
    }}
  />
);
