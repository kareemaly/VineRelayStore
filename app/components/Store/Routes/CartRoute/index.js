import React from 'react';
import styled from 'styled-components';
import { QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import Paper from 'app/components/Store/Main/Paper';
import Cart from 'app/components/Store/Cart';
import Button from 'app/components/Store/Main/Button';
import RightChevronIcon from 'app/components/Store/Icons/RightChevronIcon';
import { cartStore } from 'app/stores';
import { cartActions } from 'app/actions';

const ChevronWrapper = styled.span`
  opacity: 0.5;
  margin-left: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align: right;
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
    if(confirm(`Are you sure you want to remove this item from cart?`)) {
      cartActions.removeItem(product);
    }
  }

  onQuantityChange = (product, quantity) => {
    quantity = parseInt(quantity);
    if(quantity === 0) {
      this.removeItem(product);
    } else if(Number.isInteger(quantity)) {
      cartActions.updateItemQuantity(product, quantity);
    }
  }

  renderEmptyCart() {
    return (
      <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
        <h2>You dont have items in your cart</h2>
      </Paper>
    );
  }

  renderCart() {
    const {
      cart,
    } = this.state;

    const {
      history,
    } = this.props;

    return (
      <div>
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <h1>Cart</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        </Paper>
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <Cart
            onProductClick={(id) => history.push(`/product/${id}`)}
            cart={cart}
            removeItem={this.removeItem}
            onQuantityChange={this.onQuantityChange}
          />
          <ButtonWrapper>
            <Button
              primary
              onClick={() => history.push(`/checkout`)}
            >
              Checkout
              <ChevronWrapper>
                <RightChevronIcon width={10} height={10} />
              </ChevronWrapper>
            </Button>
          </ButtonWrapper>
        </Paper>
      </div>
    );
  }

  render() {
    const {
      notifier,
      viewer,
    } = this.props;

    return (
      <StoreLayout
        notifier={notifier}
        viewer={viewer}
      >
        {cartStore.isEmpty() ? this.renderEmptyCart() : this.renderCart()}
      </StoreLayout>
    );
  }
}

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query CartRouteQuery {
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
        return <CartRoute {...props} {...relayProps} />;
      }

      return <PageLoader />;
    }}
  />
);

