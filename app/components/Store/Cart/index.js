import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'app/components/Store/Main/Button';

const Wrapper = styled.div`
`;

const CartItem = styled.div`
  display: flex;
`;

const CartItemImage = styled.img`

`;

const CartItemTitle = styled.h3`

`;

const CartItemPrice = styled.h5`

`;

const CartItemQuantity = styled.h5`
`;

const RemoveItemButton = styled(Button)`

`;

const Cart = ({ cart, removeItem }) => (
  <Wrapper>
    {cart.items.map((item, index) => (
      <CartItem key={index}>
        <CartItemImage
          src={item.image}
        />
        <CartItemTitle>
          {item.name}
        </CartItemTitle>
        <CartItemPrice>
          {item.price}
        </CartItemPrice>
        <CartItemQuantity>
          {item.quantity}
        </CartItemQuantity>
        <RemoveItemButton onClick={() => removeItem(item.product)}>
          Remove
        </RemoveItemButton>
      </CartItem>
    ))}
  </Wrapper>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      product: PropTypes.string.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default Cart;
