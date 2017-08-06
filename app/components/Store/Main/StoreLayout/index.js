import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { createFragmentContainer, graphql } from 'react-relay';
import Header from 'app/components/Store/Main/Header';
import Footer from 'app/components/Store/Main/Footer';
import Paper from 'app/components/Store/Main/Paper';
import AdminFooter from 'app/components/Store/Main/AdminFooter';
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
  componentWillMount() {
    this.setState({
      adminFooterOpened: true,
    });
  }

  render() {
    const {
      children,
      history,
      notifier,
      viewer,
      adminFooterContent,
    } = this.props;

    const {
      adminFooterOpened,
    } = this.state;

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
        {
          viewer.isAdmin && adminFooterContent &&
          <AdminFooter
            opened={adminFooterOpened}
            onOpen={() => this.setState({ adminFooterOpened: true })}
            onClose={() => this.setState({ adminFooterOpened: false })}
            viewer={viewer}
          >
            {adminFooterContent}
          </AdminFooter>
        }
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

    fragment StoreLayout_viewer on User {
      isAdmin
      ...AdminFooter_viewer
    }
  `
);
