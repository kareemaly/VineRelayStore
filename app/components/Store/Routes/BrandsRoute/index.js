import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import BrandsGrid from 'app/components/Store/Brand/BrandsGrid';
import Paper from 'app/components/Store/Main/Paper';

class BrandsRoute extends React.Component {
  render() {
    const {
      brands,
      history,
      notifier,
      viewer,
    } = this.props;

    return (
      <StoreLayout
        notifier={notifier}
        viewer={viewer}
      >
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <h1>Shop By Brands</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        </Paper>
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <BrandsGrid
            brands={brands}
            onBrandClick={(id) => history.push(`brand/${id}`)}
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
      query BrandsRouteQuery {
        brands {
          ...BrandsGrid_brands
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
        return <BrandsRoute {...props} {...relayProps} />;
      }

      return <PageLoader />;
    }}
  />
);
