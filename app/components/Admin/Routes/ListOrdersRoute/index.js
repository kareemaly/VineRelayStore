import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import ListOrders from 'app/components/Admin/Order/ListOrders';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import { getErrorMessage } from 'app/utils/error';
import removeOrderMutation from './removeOrderMutation';


class ListOrdersRoute extends React.Component {
  static propTypes = {
    viewer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired,
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
      snackbarMessage: 'Order has been deleted',
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

  removeOrder = (orderId) => {
    if (confirm('Are you sure you want to delete this order?')) { // eslint-disable-line no-alert
      removeOrderMutation(orderId, this.onRemoveComplete);
    }
  }

  gotoViewOrder = (id) => this.props.history.push(`/admin/order/${id}`);

  render() {
    const {
      viewer,
      orders,
    } = this.props;

    const {
      snackbarMessage,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper>
          <ListOrders
            orders={orders}
            onViewOrder={this.gotoViewOrder}
            onRemoveOrder={this.removeOrder}
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
      query ListOrdersRouteQuery {
        viewer {
          isAdmin
          ...DashboardLayout_viewer
        }

        orders {
          ...ListOrders_orders
        }
      }
    `}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return <ListOrdersRoute {...relayProps} {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
