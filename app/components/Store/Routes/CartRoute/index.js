import React from 'react';
import styled from 'styled-components';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import Cart from 'app/components/Store/Cart';
import { cartStore } from 'app/stores';
import { cartActions } from 'app/actions';

const Wrapper = styled.div`
  display: flex;
`;

class CartRoute extends React.Component {

  componentWillMount() {
    this.setState({
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

  removeItem = (product) => {
    cartActions.removeItem(product);
  }

  render() {
    const {
      cart,
    } = this.state;

    return (
      <StoreLayout>
        <Cart
          cart={cart}
          removeItem={this.removeItem}
        />
      </StoreLayout>
    );
  }
}

export default CartRoute;
