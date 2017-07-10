import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import CreateProduct from 'app/components/Admin/Product/CreateProduct';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import {
  isValidationError,
  getErrorValidationObject,
  getErrorMessage,
} from 'app/utils/error';
import createProductMutation from './createProductMutation';


class CreateProductRoute extends React.Component {
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

  onCreateSuccess = (id) => {
    this.props.history.replace(`/admin/product/${id}`);
  }

  onCreateError = (error) => {
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

  onCreateComplete = ({ createProduct }, errors) => {
    if(errors) {
      this.onCreateError(errors[0]);
    } else {
      this.onCreateSuccess(createProduct.product.id);
    }
  }

  onSubmit = (product) => {
    this.setState({
      validationErrors: {},
      isLoading: true,
    });
    createProductMutation(product, this.onCreateComplete);
  }

  render() {
    const {
      viewer,
      brands,
      categories,
    } = this.props;

    const {
      snackbarMessage,
      validationErrors,
      isLoading,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper noPadding>
          <CreateProduct
            brands={brands}
            categories={categories}
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

export default (props) => {
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query CreateProductRouteQuery {
          viewer {
            isAdmin
            ...DashboardLayout_viewer
          }
          brands {
            ...CreateProduct_brands
          }
          categories {
            ...CreateProduct_categories
          }
        }
      `}
      render={({ error, props: relayProps }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (relayProps) {
          return (
            <CreateProductRoute {...props} {...relayProps} />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
