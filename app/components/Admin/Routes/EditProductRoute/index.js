import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import EditProduct from 'app/components/Admin/Product/EditProduct';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import {
  isValidationError,
  getErrorValidationObject,
  getErrorMessage,
} from 'app/utils/error';
import updateProductMutation from './updateProductMutation';


class EditProductRoute extends React.Component {
  componentWillMount() {
    // Not an admin so change to login
    if(! this.props.viewer.isAdmin) {
      this.props.history.replace(`/admin/login`);
    }

    this.setState({
      snackbarMessage: '',
      validationErrors: {},
    });
  }

  onUpdateSuccess = () => {
    this.setState({
      snackbarMessage: `Product has been updated`,
    });
  }

  onUpdateError = (error) => {
    // Handle validation error
    if(isValidationError(error)) {
      this.setState({
        validationErrors: getErrorValidationObject(error),
        isLoading: false,
      });
    // Unexpected errors
    } else {
      this.setState({
        snackbarMessage: getErrorMessage(error),
        isLoading: false,
      });
    }
  }

  onUpdateComplete = (mutation, errors) => {
    if(errors) {
      this.onUpdateError(errors[0]);
    } else {
      this.onUpdateSuccess();
    }
  }

  onSubmit = (product) => {
    this.setState({
      validationErrors: {},
      isLoading: true,
    });
    updateProductMutation(product, this.onUpdateComplete);
  }

  render() {
    const {
      viewer,
      product,
    } = this.props;

    const {
      snackbarMessage,
      validationErrors,
      isLoading,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper noPadding>
          <EditProduct
            product={product}
            errors={validationErrors}
            disableSubmit={isLoading}
            onSubmit={this.onSubmit}
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

const EditProductRouteContainer = createFragmentContainer(
  withRouter(EditProductRoute),
  graphql`
    fragment EditProductRoute_viewer on User {
      isAdmin
      ...DashboardLayout_viewer
    }

    fragment EditProductRoute_product on Product {
      ...EditProduct_product
    }
  `
);

export default ({ match }) => {
  const productId = match.params.productId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query EditProductRouteQuery($productId: ID!) {
          viewer {
            ...EditProductRoute_viewer
          }
          node(id: $productId) {
            ...EditProductRoute_product
          }
        }
      `}
      variables={{
        productId,
      }}
      render={({ error, props }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (props) {
          return (
            <EditProductRouteContainer
              product={props.node}
              viewer={props.viewer}
            />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
