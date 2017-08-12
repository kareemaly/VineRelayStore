import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import EditCategory from 'app/components/Admin/Category/EditCategory';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import {
  isValidationError,
  getErrorValidationObject,
  getErrorMessage,
} from 'app/utils/error';
import updateCategoryMutation from './updateCategoryMutation';


class EditCategoryRoute extends React.Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  componentWillMount() {
    // Not an admin so change to login
    if (!this.props.viewer.isAdmin) {
      this.props.history.replace('/admin/login');
    }

    this.setState({
      snackbarMessage: '',
      validationErrors: {},
    });
  }

  onUpdateSuccess = () => {
    this.setState({
      snackbarMessage: 'Category has been updated',
    });
  }

  onUpdateError = (error) => {
    // Handle validation error
    if (isValidationError(error)) {
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
    if (errors) {
      this.onUpdateError(errors[0]);
    } else {
      this.onUpdateSuccess();
    }
  }

  onSubmit = (category) => {
    this.setState({
      validationErrors: {},
      isLoading: true,
    });
    updateCategoryMutation(category, this.onUpdateComplete);
  }

  render() {
    const {
      viewer,
      node: category,
    } = this.props;

    const {
      snackbarMessage,
      validationErrors,
      isLoading,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper paddings={['top', 'bottom', 'left', 'right']}>
          <EditCategory
            category={category}
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

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query EditCategoryRouteQuery($categoryId: ID!) {
        viewer {
          isAdmin
          ...DashboardLayout_viewer
        }
        node(id: $categoryId) {
          ...EditCategory_category
        }
      }
    `}
    variables={{
      categoryId: props.match.params.categoryId, // eslint-disable-line react/prop-types
    }}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return <EditCategoryRoute {...relayProps} {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
