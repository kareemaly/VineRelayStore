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

class CategoryRoute extends React.Component {
  render() {
    const {
      viewer,
      category,
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

const CategoryRouteContainer = createFragmentContainer(
  withRouter(CategoryRoute),
  graphql`
    fragment CategoryRoute_viewer on User {
      isAdmin
    }

    fragment CategoryRoute_category on Category {
      id
      ...CategoryHero_category
      ...CategoryHeader_category
    }

    fragment CategoryRoute_products on ProductConnection {
      ...ProductsGrid_products
    }
  `
);

export default ({ match }) => {
  const categoryId = match.params.categoryId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query CategoryRouteQuery($categoryId: ID!) {
          viewer {
            ...CategoryRoute_viewer
          }

          node(id: $categoryId) {
            ...CategoryRoute_category
          }

          products {
            ...CategoryRoute_products
          }
        }
      `}
      variables={{
        categoryId,
      }}
      render={({ error, props }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (props) {
          return (
            <CategoryRouteContainer
              category={props.node}
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
