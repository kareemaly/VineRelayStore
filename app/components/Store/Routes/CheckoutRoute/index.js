import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import Paper from 'app/components/Store/Main/Paper';
import CheckoutForm from 'app/components/Store/Order/CheckoutForm';
import OrderSummary from 'app/components/Store/Order/OrderSummary';
import {
  isValidationError,
  getErrorValidationObject,
  getErrorMessage,
} from 'app/utils/error';
import { cartStore } from 'app/stores';
import { cartActions } from 'app/actions';
import breakpoints from 'app/utils/breakpoints';
import basicCheckoutMutation from './basicCheckoutMutation';

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

const SummaryWrapper = styled.div`
  flex-basis: 45%;
  @media only screen and (max-width: ${breakpoints.tablet}px) {
    margin-bottom: 20px;
  }
`;

const FormWrapper = styled.div`
  flex-basis: 45%;
`;

class CheckoutRoute extends React.Component {
  componentWillMount() {
    if(cartStore.isEmpty()) {
      this.props.history.replace(`/cart`);
    }

    this.setState({
      snackbarMessage: '',
      validationErrors: {},
      cart: cartStore.get(),
    });

    this.cartListener = cartStore.addListener(() => {
      this.setState({
        cart: cartStore.get(),
      });
    })
  }

  componentWillUnmount() {
    this.cartListener.remove();
  }

  onCheckoutSuccess = ({ order }) => {
    // Destroy cart and show thank you message with order number
    cartActions.destroy();
    this.props.history.replace(`/checkout/thanks/${order.orderNumber}`);
  }

  onCheckoutError = (error) => {
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

  onCheckoutComplete = (mutation, errors) => {
    if(errors) {
      this.onCheckoutError(errors[0]);
    } else {
      this.onCheckoutSuccess(mutation.basicCheckout);
    }
  }

  onSubmit = (orderDetails) => {
    this.setState({
      validationErrors: {},
      isLoading: true,
    });

    basicCheckoutMutation({
      ...orderDetails,
      items: cartStore.getItems().map((item) => ({
        // Only send mutation required attributes
        quantity: item.quantity,
        product: item.product,
      })),
    }, this.onCheckoutComplete);
  }

  render() {
    const {
      history,
    } = this.props;

    const {
      validationErrors,
      isLoading,
      snackbarMessage,
      cart,
    } = this.state;

    return (
      <StoreLayout>
        <StyledPaper paddings={['top', 'bottom', 'left', 'right']}>
          <SummaryWrapper>
            <OrderSummary
              cart={cart}
            />
          </SummaryWrapper>
          <FormWrapper>
            <CheckoutForm
              onBackToCartClick={() => history.push(`/cart`)}
              errors={validationErrors}
              submitDisabled={isLoading}
              onSubmit={this.onSubmit}
            />
          </FormWrapper>
        </StyledPaper>
        {snackbarMessage}
      </StoreLayout>
    );
  }
}

export default CheckoutRoute;
