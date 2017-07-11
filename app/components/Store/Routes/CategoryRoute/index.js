import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import CategoryHeader from 'app/components/Store/Category/CategoryHeader';
import CategoryHero from 'app/components/Store/Category/CategoryHero';
import ProductsGrid from 'app/components/Store/Product/ProductsGrid';
import AdminFooter from 'app/components/Store/Main/AdminFooter';
import Button from 'app/components/Store/Main/Button';
import { cartActions } from 'app/actions';
import { cartStore } from 'app/stores';

class CategoryRoute extends React.Component {

  componentWillMount() {
    this.cartListener = cartStore.addListener(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.cartListener.remove();
  }

  isProductInCart = (productId) => {
    return cartStore.hasItem(productId);
  }

  addProductToCart = (productId) => {
    if(cartStore.hasItem(productId)) {
      cartActions.removeItem(productId);
    } else {
      cartActions.addItem(productId);
    }
  }

  render() {
    const {
      node: category,
      viewer,
      products,
      history,
    } = this.props;

    return (
      <StoreLayout>
        <CategoryHero
          category={category}
        />
        <CategoryHeader
          category={category}
        />
        <ProductsGrid
          products={products}
          onProductClick={(id) => history.push(`/product/${id}`)}
          addProductToCart={this.addProductToCart}
          isProductInCart={this.isProductInCart}
        />
        {
          viewer.isAdmin &&
          <AdminFooter>
            <Button onClick={() => history.push(`/admin/category/${category.id}`)}>
              Edit category
            </Button>
          </AdminFooter>
        }
      </StoreLayout>
    );
  }
}

export default (props) => {
  const categoryId = props.match.params.categoryId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query CategoryRouteQuery($categoryId: ID!) {
          viewer {
            isAdmin
          }

          node(id: $categoryId) {
            id
            ...CategoryHero_category
            ...CategoryHeader_category
          }

          products(categoryId: $categoryId) {
            ...ProductsGrid_products
          }
        }
      `}
      variables={{
        categoryId,
      }}
      render={({ error, props: relayProps }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (relayProps) {
          return (
            <CategoryRoute {...props} {...relayProps} />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
