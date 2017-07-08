import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import ListBrands from 'app/components/Admin/Brand/ListBrands';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import { getErrorMessage } from 'app/utils/error';
import removeBrandMutation from './removeBrandMutation';


class ListBrandsRoute extends React.Component {
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
      snackbarMessage: `Brand has been deleted`,
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

  gotoEditBrand = (id) => this.props.history.push(`/admin/brand/${id}`);

  render() {
    const {
      viewer,
      brands,
    } = this.props;

    const {
      snackbarMessage,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper noPadding>
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
      </DashboardLayout>
    );
  }
}

const ListBrandsRouteContainer = createFragmentContainer(
  withRouter(ListBrandsRoute),
  graphql`
    fragment ListBrandsRoute_viewer on User {
      firstName
      isAdmin
      ...DashboardLayout_viewer
    }

    fragment ListBrandsRoute_brands on BrandConnection {
      ...ListBrands_brands
    }
  `
);

export default () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query ListBrandsRouteQuery {
        viewer {
          ...ListBrandsRoute_viewer
        }
        brands {
          ...ListBrandsRoute_brands
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (props) {
        return <ListBrandsRouteContainer {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
