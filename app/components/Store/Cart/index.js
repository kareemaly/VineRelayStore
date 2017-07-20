import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'app/components/Store/Main/Button';
import breakpoints from 'app/utils/breakpoints';
import UpChevronIcon from 'app/components/Store/Icons/UpChevronIcon';
import DownChevronIcon from 'app/components/Store/Icons/DownChevronIcon';
import CloseIcon from 'app/components/Store/Icons/CloseIcon';

const Wrapper = styled.div`
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    overflow-x: scroll;
  }
`;

const Table = styled.table`
  width: 100%;
  border-bottom: 1px solid #EEE;
`;

const THEAD = styled.thead`
`;

const TH = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #EEE;
`;

const TBODY = styled.tbody`
`;

const TR = styled.tr`
  text-align: left;
`;

const TD = styled.td`
  padding: 5px 0;
  vertical-align: center;
  ${(props) => props.alignRight && `text-align: right;`}
`;

const CartItemImage = styled.img`
  cursor: pointer;
  width: 50px;
`;

const CartItemTitle = styled.h3`
  cursor: pointer;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CartItemPrice = styled.h5`
`;

const TotalPriceWord = styled.h3`
  margin: 0 15px;
`;

const TotalPrice = styled.h4`
  margin: 0;
`;

const CartItemQuantity = styled.h5`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuantityTools = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.5;
`;

const ChevronWrapper = styled.div`
  padding: 0px 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const RemoveItemButton = styled(Button)`
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const RemoveItemIcon = styled(CloseIcon)`
  cursor: pointer;
  display: none;
  @media only screen and (max-width: ${breakpoints.mobile}px) {
    display: block;
  }
`;

const Cart = ({ cart, removeItem, onQuantityChange, onProductClick }) => (
  <Wrapper>
    <Table>
      <THEAD>
        <TR>
          <TH>Image</TH>
          <TH>Name</TH>
          <TH>Price</TH>
          <TH>Qty</TH>
          <TH></TH>
        </TR>
      </THEAD>
      <TBODY>
        {cart.items.map((item, index) => (
          <TR key={index}>
            <TD>
              <CartItemImage
                src={item.image}
                onClick={() => onProductClick(item.product)}
              />
            </TD>
            <TD>
              <CartItemTitle onClick={() => onProductClick(item.product)}>
                {item.name}
              </CartItemTitle>
            </TD>
            <TD>
              <CartItemPrice>
                ${item.price} USD
              </CartItemPrice>
            </TD>
            <TD>
              <CartItemQuantity>
                {item.quantity}
                <QuantityTools>
                  <ChevronWrapper
                    onClick={() => onQuantityChange(item.product, item.quantity + 1)}
                  >
                    <UpChevronIcon width={10} />
                  </ChevronWrapper>
                  <ChevronWrapper
                    onClick={() => onQuantityChange(item.product, item.quantity - 1)}
                  >
                    <DownChevronIcon width={10} />
                  </ChevronWrapper>
                </QuantityTools>
              </CartItemQuantity>
            </TD>
            <TD alignRight>
              <RemoveItemButton
                secondary
                onClick={() => removeItem(item.product)}
              >
                Remove
              </RemoveItemButton>
              <RemoveItemIcon
                width={20}
                height={20}
                onClick={() => removeItem(item.product)}
              />
            </TD>
          </TR>
        ))}
        <TR>
          <TD></TD>
          <TD alignRight><TotalPriceWord>Total:</TotalPriceWord></TD>
          <TD colSpan={2}><TotalPrice>${cart.totalPrice} USD</TotalPrice></TD>
          <TD></TD>
        </TR>
      </TBODY>
    </Table>
  </Wrapper>
);

Cart.propTypes = {
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
  onQuantityChange: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default Cart;
