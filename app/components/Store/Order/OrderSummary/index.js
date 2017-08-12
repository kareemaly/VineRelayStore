import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Title = styled.h2`
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #EEE;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const CartItemImageWrapper = styled.div`
  width: 50px;
  flex-shrink: 0;
`;

const CartItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const CartItemDescription = styled.h5`
  text-align: left;
  margin: 0 20px;
  flex-basis: 100%;
`;

const CartItemPrice = styled.h5`
  flex-shrink: 0;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  background: #333;
  color: #FFF;
  padding: 10px;
`;

const TotalWord = styled.h4`
  margin: 0;
`;

const TotalPrice = styled.h4`
  margin: 0;
`;

const OrderSummary = ({ cart }) => (
  <Wrapper>
    <Title>Order Summary</Title>
    <Divider />
    {cart.items.map((item) => (
      <CartItem key={item.product}>
        <CartItemImageWrapper>
          <CartItemImage
            src={item.image}
          />
        </CartItemImageWrapper>
        <CartItemDescription>
          <b>{item.quantity} x </b>{item.name}
        </CartItemDescription>
        <CartItemPrice>
          ${item.price} USD
        </CartItemPrice>
      </CartItem>
    ))}
    <Divider />
    <TotalRow>
      <TotalWord>
        Total
      </TotalWord>
      <TotalPrice>
        ${cart.totalPrice} USD
      </TotalPrice>
    </TotalRow>
  </Wrapper>
);

OrderSummary.propTypes = {
  cart: PropTypes.shape({
    totalPrice: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      product: PropTypes.string.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default OrderSummary;
