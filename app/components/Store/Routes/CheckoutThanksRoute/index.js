import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import Paper from 'app/components/Store/Main/Paper';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';

const CheckoutThanksRoute = ({
  match: {
    params: {
      orderNumber,
    },
  },
  notifier,
  viewer,
}) => (
  <StoreLayout
    notifier={notifier}
    viewer={viewer}
  >
    <Paper paddings={['top', 'bottom', 'left', 'right']}>
      <h2>Your order number is {orderNumber}.</h2>
      <h3>Thank you for shopping at the Relay store!</h3>
    </Paper>
  </StoreLayout>
);

CheckoutThanksRoute.propTypes = {
  match: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
  notifier: PropTypes.object.isRequired,
};

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query CheckoutThanksRouteQuery {
        notifier {
          ...StoreLayout_notifier
        }
        viewer {
          ...StoreLayout_viewer
        }
      }
    `}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return <CheckoutThanksRoute {...props} {...relayProps} />;
      }

      return <PageLoader />;
    }}
  />
);
