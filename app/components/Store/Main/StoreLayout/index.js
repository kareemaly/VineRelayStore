import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { createFragmentContainer, graphql } from 'react-relay';
import Header from 'app/components/Store/Main/Header';
import Footer from 'app/components/Store/Main/Footer';
import Paper from 'app/components/Store/Main/Paper';
import Notifier from 'app/components/Store/Main/Notifier';
import { cartStore } from 'app/stores';

const PageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  margin-bottom: 60px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #EEE;
`;

class StoreLayout extends React.Component {
  render() {
    const {
      children,
      history,
      notifier,
    } = this.props;

    return (
      <PageWrapper>
        {
          notifier.message &&
          <Notifier
            notifier={notifier}
          />
        }
        <Header
          onHomeClick={() => history.push(`/`)}
          onAboutClick={() => history.push(`/about`)}
          onCategoriesClick={() => history.push(`/categories`)}
          onBrandsClick={() => history.push(`/brands`)}
          onCartClick={() => history.push(`/cart`)}
          onAdminClick={() => history.push(`/admin`)}
          cartItemsNumber={cartStore.getItems().length}
        />
        <Divider />
        <ContentWrapper>
          {children}
        </ContentWrapper>
        <Divider />
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <Footer
            onHomeClick={() => history.push(`/`)}
            onAboutClick={() => history.push(`/about`)}
            onCategoriesClick={() => history.push(`/categories`)}
            onBrandsClick={() => history.push(`/brands`)}
            onCartClick={() => history.push(`/cart`)}
            onGithubClick={() => console.log('onGithubClick')}
            onWebsiteClick={() => console.log('onWebsiteClick')}
            onEmailClick={() => console.log('onEmailClick')}
          />
        </Paper>
      </PageWrapper>
    );
  }
}

export default createFragmentContainer(
  withRouter(StoreLayout),
  graphql`
    fragment StoreLayout_notifier on Notifier {
      message
      ...Notifier_notifier
    }
  `
);
