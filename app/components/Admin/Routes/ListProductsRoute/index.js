import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import ListProducts from 'app/components/Admin/Product/ListProducts';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import { getErrorMessage } from 'app/utils/error';
import removeProductMutation from './removeProductMutation';


class ListProductsRoute extends React.Component {
  componentWillMount() {
    // Not an admin so change to login
    if(! this.props.viewer.isAdmin) {
      this.props.history.replace(`/admin/login`);
    }

    this.setState({
      snackbarMessage: '',
    });
  }

  onRemoveSuccess = () => {
    this.setState({
      snackbarMessage: `Product has been deleted`,
    });
  }

  onRemoveError = (error) => {
    this.setState({
      snackbarMessage: getErrorMessage(error),
    });
  }

  onRemoveComplete = (mutation, errors) => {
    if(errors) {
      this.onRemoveError(errors[0]);
    } else {
      this.onRemoveSuccess();
    }
  }

  gotoEditProduct = (id) => this.props.history.push(`/admin/product/${id}`);

  render() {
    const {
      viewer,
      products,
    } = this.props;

    const {
      snackbarMessage,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper noPadding>
          <ListProducts
            products={products}
            onEditProduct={this.gotoEditProduct}
            onRemoveProduct={(nodeId) => removeProductMutation(nodeId, this.onRemoveComplete)}
          />
        </Paper>
        <Snackbar
          open={!!snackbarMessage}
          message={snackbarMessage || ''}
          autoHideDuration={4000}
          onRequestClose={() => this.setState({ snackbarMessage: '' })}
        />
      </DashboardLayout>
    );
  }
}

const ListProductsRouteContainer = createFragmentContainer(
  withRouter(ListProductsRoute),
  graphql`
    fragment ListProductsRoute_viewer on User {
      firstName
      isAdmin
      ...DashboardLayout_viewer
    }

    fragment ListProductsRoute_products on ProductConnection {
      ...ListProducts_products
    }
  `
);

export default () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query ListProductsRouteQuery {
        viewer {
          ...ListProductsRoute_viewer
        }
        products {
          ...ListProductsRoute_products
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (props) {
        return <ListProductsRouteContainer {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
