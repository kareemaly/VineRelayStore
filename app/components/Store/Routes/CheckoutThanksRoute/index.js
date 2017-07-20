import React from 'react';
import styled from 'styled-components';
import Paper from 'app/components/Store/Main/Paper';
import StoreLayout from 'app/components/Store/Main/StoreLayout';

const Wrapper = styled.div`
  display: flex;
`;

class CheckoutThanksRoute extends React.Component {
  render() {
    const {
      match: {
        params: {
          orderNumber,
        },
      },
    } = this.props;

    return (
      <StoreLayout>
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <h2>Your order number is {orderNumber}.</h2>
          <h3>Thank you for shopping at the Relay store!</h3>
        </Paper>
      </StoreLayout>
    );
  }
}

export default CheckoutThanksRoute;
