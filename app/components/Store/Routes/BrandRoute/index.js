import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import BrandHero from 'app/components/Store/Brand/BrandHero';
import ProductsGrid from 'app/components/Store/Product/ProductsGrid';
import Button from 'app/components/Store/Main/Button';
import Paper from 'app/components/Store/Main/Paper';
import { cartActions } from 'app/actions';
import { cartStore } from 'app/stores';

const SmallDivider = styled.div`
  width: 100px;
  height: 1px;
  background: #000;
  opacity: 0.1;
  margin: 0 auto;
`;

class BrandRoute extends React.Component {

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
      node: brand,
      viewer,
      products,
      history,
      notifier,
    } = this.props;

    return (
      <StoreLayout
        notifier={notifier}
        viewer={viewer}
        adminFooterContent={
          <Button primary onClick={() => history.push(`/admin/brand/${brand.id}`)}>
            Edit brand
          </Button>
        }
      >
        <BrandHero
          brand={brand}
        />
        {
          brand.description &&
          <Paper paddings={[ 'top', 'left', 'right' ]}>
            <p>{brand.description}</p>
            <SmallDivider />
          </Paper>
        }
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <ProductsGrid
            products={products}
            onProductClick={(id) => history.push(`/product/${id}`)}
            onAddToCartClick={this.onAddToCartClick}
            isProductInCart={this.isProductInCart}
          />
        </Paper>
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
          node(id: $brandId) {
            id
            ... on Brand {
              description
            }
            ...BrandHero_brand
          }

          products(brandId: $brandId) {
            ...ProductsGrid_products
          }

          viewer {
            ...StoreLayout_viewer
          }

          notifier {
            ...StoreLayout_notifier
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
