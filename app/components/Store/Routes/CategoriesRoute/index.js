import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import CategoriesGrid from 'app/components/Store/Category/CategoriesGrid';

const Title = styled.h2`
`;

class CategoriesRoute extends React.Component {
  render() {
    const {
      categories,
      history,
    } = this.props;

    return (
      <StoreLayout>
        <Title>
          Categories
        </Title>
        <CategoriesGrid
          categories={categories}
          onCategoryClick={(id) => history.push(`category/${id}`)}
        />
      </StoreLayout>
    );
  }
}

const CategoriesRouteContainer = createFragmentContainer(
  withRouter(CategoriesRoute),
  graphql`
    fragment CategoriesRoute_categories on CategoryConnection {
      ...CategoriesGrid_categories
    }
  `
);

export default () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query CategoriesRouteQuery {
        categories {
          ...CategoriesRoute_categories
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (props) {
        return <CategoriesRouteContainer {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
