import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import CreateBrand from 'app/components/Admin/Brand/CreateBrand';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import {
  isValidationError,
  getErrorValidationObject,
  getErrorMessage,
} from 'app/utils/error';
import createBrandMutation from './createBrandMutation';


class CreateBrandRoute extends React.Component {
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
    this.props.history.replace(`/admin/brand/${id}`);
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

  onCreateComplete = ({ createBrand }, errors) => {
    if(errors) {
      this.onCreateError(errors[0]);
    } else {
      this.onCreateSuccess(createBrand.brand.id);
    }
  }

  onSubmit = (brand) => {
    this.setState({
      validationErrors: {},
      isLoading: true,
    });
    createBrandMutation(brand, this.onCreateComplete);
  }

  render() {
    const {
      viewer,
    } = this.props;

    const {
      snackbarMessage,
      validationErrors,
      isLoading,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper noPadding>
          <CreateBrand
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

const CreateBrandRouteContainer = createFragmentContainer(
  withRouter(CreateBrandRoute),
  graphql`
    fragment CreateBrandRoute_viewer on User {
      isAdmin
      ...DashboardLayout_viewer
    }
  `
);

export default () => {
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query CreateBrandRouteQuery {
          viewer {
            ...CreateBrandRoute_viewer
          }
        }
      `}
      render={({ error, props }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (props) {
          return (
            <CreateBrandRouteContainer
              viewer={props.viewer}
            />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
