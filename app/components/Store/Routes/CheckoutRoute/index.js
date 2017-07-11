import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import CheckoutForm from 'app/components/Store/Order/CheckoutForm';
import {
  isValidationError,
  getErrorValidationObject,
  getErrorMessage,
} from 'app/utils/error';
import { cartStore } from 'app/stores';
import { cartActions } from 'app/actions';
import basicCheckoutMutation from './basicCheckoutMutation';

class CheckoutRoute extends React.Component {
  componentWillMount() {
    if(cartStore.isEmpty()) {
      this.props.history.replace(`/cart`);
    }

    this.setState({
      snackbarMessage: '',
      validationErrors: {},
    });
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
        quantity: item.quantity,
        product: item.product,
        price: 200,
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
    } = this.state;

    return (
      <StoreLayout>
        <CheckoutForm
          errors={validationErrors}
          submitDisabled={isLoading}
          onSubmit={this.onSubmit}
        />
        {snackbarMessage}
      </StoreLayout>
    );
  }
}

export default CheckoutRoute;
