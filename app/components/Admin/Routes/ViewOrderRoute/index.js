import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import ViewOrder from 'app/components/Admin/Order/ViewOrder';
import Paper from 'app/components/Admin/Main/Paper';
import Snackbar from 'material-ui/Snackbar';
import { getErrorMessage } from 'app/utils/error';
import updateOrderStatusMutation from './updateOrderStatusMutation';
const UNCONFIRMED = 'store/orderStatus/UNCONFIRMED';
const CONFIRMED = 'store/orderStatus/CONFIRMED';
const OUT_FOR_DELIVERY = 'store/orderStatus/OUT_FOR_DELIVERY';
const DELIVERED = 'store/orderStatus/DELIVERED';
const FAILED = 'store/orderStatus/FAILED';

class ViewOrderRoute extends React.Component {
  componentWillMount() {
    // Not an admin so change to login
    if(! this.props.viewer.isAdmin) {
      this.props.history.replace(`/admin/login`);
    }

    this.setState({
      snackbarMessage: '',
    });
  }

  onUpdateSuccess = () => {
    this.setState({
      snackbarMessage: `Order status has been updated`,
    });
  }

  onUpdateError = (error) => {
    this.setState({
      snackbarMessage: getErrorMessage(error),
    });
  }

  onUpdateComplete = (mutation, errors) => {
    if(errors) {
      this.onUpdateError(errors[0]);
    } else {
      this.onUpdateSuccess();
    }
  }

  onStatusChange = (status) => {
    // Update order status
    updateOrderStatusMutation({
      id: this.props.node.id,
      status,
    }, this.onUpdateComplete);
  }

  render() {
    const {
      viewer,
      node: order,
    } = this.props;

    const {
      snackbarMessage,
    } = this.state;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <ViewOrder
            order={order}
            onStatusChange={this.onStatusChange}
            supportedStatuses={[
              { text: 'Unconfirmed', value: UNCONFIRMED },
              { text: 'Confirmed', value: CONFIRMED },
              { text: 'Out for delivery', value: OUT_FOR_DELIVERY },
              { text: 'Delivered', value: DELIVERED },
              { text: 'Failed', value: FAILED },
            ]}
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
  const orderId = props.match.params.orderId;
  return (
    <QueryRenderer
      environment={relayEnvironment}
      query={graphql`
        query ViewOrderRouteQuery($orderId: ID!) {
          viewer {
            isAdmin
            ...DashboardLayout_viewer
          }

          node(id: $orderId) {
            ... on Order {
              id
            }
            ...ViewOrder_order
          }
        }
      `}
      variables={{
        orderId,
      }}
      render={({ error, props: relayProps }) => {
        if (error) {
          return <PageError error={error} />;
        }

        if (relayProps) {
          return (
            <ViewOrderRoute {...props} {...relayProps} />
          );
        }

        return <PageLoader />;
      }}
    />
  );
}
