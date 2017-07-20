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
import AdminFooter from 'app/components/Store/Main/AdminFooter';
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

    this.setState({
      adminFooterOpened: true,
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
    } = this.props;

    const {
      adminFooterOpened,
    } = this.state;

    return (
      <StoreLayout>
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
        {
          viewer.isAdmin &&
          <AdminFooter
            opened={adminFooterOpened}
            onOpen={() => this.setState({ adminFooterOpened: true })}
            onClose={() => this.setState({ adminFooterOpened: false })}
            viewer={viewer}
          >
            <Button primary onClick={() => history.push(`/admin/brand/${brand.id}`)}>
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
            ...AdminFooter_viewer
          }

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
