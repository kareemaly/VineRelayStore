import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import EditBrand from 'app/components/Admin/Brand/EditBrand';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import {
  isValidationError,
  getErrorValidationObject,
  getErrorMessage,
} from 'app/utils/error';
import updateBrandMutation from './updateBrandMutation';


class EditBrandRoute extends React.Component {
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
      snackbarMessage: `Brand has been updated`,
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

  onSubmit = (brand) => {
    this.setState({
      validationErrors: {},
      isLoading: true,
    });
    updateBrandMutation(brand, this.onUpdateComplete);
  }

  render() {
    const {
      viewer,
      brand,
    } = this.props;

    const {
      snackbarMessage,
      validationErrors,
      isLoading,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <EditBrand
            brand={brand}
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

const EditBrandRouteContainer = createFragmentContainer(
  withRouter(EditBrandRoute),
  graphql`
    fragment EditBrandRoute_viewer on User {
      isAdmin
      ...DashboardLayout_viewer
    }

    fragment EditBrandRoute_brand on Brand {
      ...EditBrand_brand
    }
  `
);

export default ({ match }) => {
  const brandId = match.params.brandId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query EditBrandRouteQuery($brandId: ID!) {
          viewer {
            ...EditBrandRoute_viewer
          }
          node(id: $brandId) {
            ...EditBrandRoute_brand
          }
        }
      `}
      variables={{
        brandId,
      }}
      render={({ error, props }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (props) {
          return (
            <EditBrandRouteContainer
              brand={props.node}
              viewer={props.viewer}
            />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
