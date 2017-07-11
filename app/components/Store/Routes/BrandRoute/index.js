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
import { cartActions } from 'app/actions';
import { cartStore } from 'app/stores';

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

  triggerProductInCart = (product) => {
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
          triggerProductInCart={this.triggerProductInCart}
          isProductInCart={this.isProductInCart}
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
