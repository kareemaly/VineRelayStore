import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import Paper from 'app/components/Store/Main/Paper';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import BrandsGrid from 'app/components/Store/Brand/BrandsGrid';
import CategoriesGrid from 'app/components/Store/Category/CategoriesGrid';
import coverImage from 'app/assets/homepage/cover.jpg';

const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SmallDivider = styled.div`
  width: 60px;
  height: 1px;
  background: #000;
  opacity: 0.2;
`;

const SectionTitle = ({ children }) => (
  <SectionTitleWrapper>
    <h2>{children}</h2>
    <SmallDivider />
  </SectionTitleWrapper>
);

SectionTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

const Hero = styled.div`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  height: calc(100vh - ${(props) => props.theme.headerHeight}px);
`;

const HomeRoute = ({
  brands,
  categories,
  history,
  notifier,
  viewer,
}) => (
  <StoreLayout
    notifier={notifier}
    viewer={viewer}
  >
    <Hero
      src={coverImage}
    />
    <SectionTitle>Brand Catalog</SectionTitle>
    <Paper paddings={['top', 'bottom', 'left', 'right']}>
      <BrandsGrid
        brands={brands}
        onBrandClick={(id) => history.push(`brand/${id}`)}
      />
    </Paper>
    <SectionTitle>Shop By Category</SectionTitle>
    <Paper paddings={['top', 'bottom', 'left', 'right']}>
      <CategoriesGrid
        categories={categories}
        onCategoryClick={(id) => history.push(`category/${id}`)}
      />
    </Paper>
  </StoreLayout>
);

HomeRoute.propTypes = {
  viewer: PropTypes.object.isRequired,
  notifier: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  brands: PropTypes.object.isRequired,
};

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query HomeRouteQuery {
        brands {
          ...BrandsGrid_brands
        }
        categories {
          ...CategoriesGrid_categories
        }
        notifier {
          ...StoreLayout_notifier
        }
        viewer {
          ...StoreLayout_viewer
        }
      }
    `}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return <HomeRoute {...props} {...relayProps} />;
      }

      return <PageLoader />;
    }}
  />
);
