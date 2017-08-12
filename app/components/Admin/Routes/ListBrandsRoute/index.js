import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import ListBrands from 'app/components/Admin/Brand/ListBrands';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import { getErrorMessage } from 'app/utils/error';
import FloatingCreateButton from 'app/components/Admin/Main/FloatingCreateButton';
import removeBrandMutation from './removeBrandMutation';


class ListBrandsRoute extends React.Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    brands: PropTypes.object.isRequired,
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
      snackbarMessage: 'Brand has been deleted',
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

  gotoEditBrand = (id) => this.props.history.push(`/admin/brand/${id}`);

  render() {
    const {
      viewer,
      brands,
      history,
    } = this.props;

    const {
      snackbarMessage,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper>
          <ListBrands
            brands={brands}
            onEditBrand={this.gotoEditBrand}
            onRemoveBrand={(nodeId) => removeBrandMutation(nodeId, this.onRemoveComplete)}
          />
        </Paper>
        <Snackbar
          open={!!snackbarMessage}
          message={snackbarMessage || ''}
          autoHideDuration={4000}
          onRequestClose={() => this.setState({ snackbarMessage: '' })}
        />
        <FloatingCreateButton
          onClick={() => history.push('/admin/brand/create')}
        />
      </DashboardLayout>
    );
  }
}

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query ListBrandsRouteQuery {
        viewer {
          isAdmin
          ...DashboardLayout_viewer
        }
        brands {
          ...ListBrands_brands
        }
      }
    `}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return <ListBrandsRoute {...relayProps} {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
