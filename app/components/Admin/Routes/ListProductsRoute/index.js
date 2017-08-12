import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import ListProducts from 'app/components/Admin/Product/ListProducts';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import { getErrorMessage } from 'app/utils/error';
import FloatingCreateButton from 'app/components/Admin/Main/FloatingCreateButton';
import removeProductMutation from './removeProductMutation';

class ListProductsRoute extends React.Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    products: PropTypes.object.isRequired,
  };

  componentWillMount() {
    // Not an admin so change to login
    if (!this.props.viewer.isAdmin) {
      this.props.history.replace('/admin/login');
    }

    this.setState({
      snackbarMessage: '',
    });
  }

  onRemoveSuccess = () => {
    this.setState({
      snackbarMessage: 'Product has been deleted',
    });
  }

  onRemoveError = (error) => {
    this.setState({
      snackbarMessage: getErrorMessage(error),
    });
  }

  onRemoveComplete = (mutation, errors) => {
    if (errors) {
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
      history,
    } = this.props;

    const {
      snackbarMessage,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper>
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
        <FloatingCreateButton
          onClick={() => history.push('/admin/product/create')}
        />
      </DashboardLayout>
    );
  }
}

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query ListProductsRouteQuery {
        viewer {
          isAdmin
          ...DashboardLayout_viewer
        }
        products {
          ...ListProducts_products
        }
      }
    `}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return <ListProductsRoute {...relayProps} {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
