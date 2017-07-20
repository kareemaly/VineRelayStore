import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from 'app/components/Store/Main/Grid';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
`;

const ItemTitle = styled.h3`
`;

const ItemPrice = styled.h5`
`;

const ItemQuantity = styled.h4`

`;

const ItemImageWrapper = styled.div`
  width: 100%;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  display: flex;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OrderDetailsColumn = styled.div`
  flex-basis: 32%;
  margin-bottom: 15px;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const OrderRow = styled.div`
  display: flex;
  margin-top: 10px;
`;

const OrderKey = styled.h4`
  margin: 0;
  font-weight: bold;
  width: 180px;
`;

const OrderValue = styled.h4`
  margin: 0;
  margin-left: 10px;
`;

const ToolsWrapper = styled.div`
  display: flex;
  border-top: 1px solid #EEE;
  padding-top: 5px;
`;

const ToolLabel = styled.h3`
`;

const ViewOrder = ({ order, onStatusChange, supportedStatuses, ...props }) => (
  <Wrapper {...props}>
    <OrderDetails>
      <OrderDetailsColumn>
        <Title>
          Order Details
        </Title>
        <OrderRow>
          <OrderKey>Order Number</OrderKey>
          <OrderValue>{order.orderNumber}</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderKey>User first name</OrderKey>
          <OrderValue>{order.firstName}</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderKey>User last name</OrderKey>
          <OrderValue>{order.lastName}</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderKey>User email</OrderKey>
          <OrderValue>{order.email}</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderKey>User phone number</OrderKey>
          <OrderValue>{order.phoneNumber}</OrderValue>
        </OrderRow>
      </OrderDetailsColumn>
      <OrderDetailsColumn>
        <Title>
          Delivery Address
        </Title>
        <OrderRow>
          <OrderKey>Address line (1)</OrderKey>
          <OrderValue>{order.addressLine1}</OrderValue>
        </OrderRow>
        {
          order.addressLine2
          &&
          <OrderRow>
            <OrderKey>Address line (2)</OrderKey>
            <OrderValue>{order.addressLine2}</OrderValue>
          </OrderRow>
        }
        <OrderRow>
          <OrderKey>City</OrderKey>
          <OrderValue>{order.city}</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderKey>State</OrderKey>
          <OrderValue>{order.state}</OrderValue>
        </OrderRow>
        <OrderRow>
          <OrderKey>Zip code</OrderKey>
          <OrderValue>{order.zipCode}</OrderValue>
        </OrderRow>
      </OrderDetailsColumn>
    </OrderDetails>
    <Title>
      Order Items
    </Title>
    <Grid
      itemsPerRow={{
        mobile: 2,
        tablet: 4,
        desktop: 6,
      }}
    >
      {order.items.map((item, index) => (
        <ItemWrapper
          key={index}
        >
          <ItemImageWrapper>
            <ItemImage
              src={item.product.mainImage}
            />
          </ItemImageWrapper>
          <ItemTitle>
            {item.product.name}
          </ItemTitle>
          <ItemPrice>
            ${item.product.price} USD
          </ItemPrice>
          <ItemQuantity>
            <b>Quantity: </b> {item.quantity}
          </ItemQuantity>
        </ItemWrapper>
      ))}
    </Grid>
    <ToolsWrapper>
      <ToolLabel>
        Change order status
      </ToolLabel>
      <DropDownMenu
        value={order.status}
        onChange={(e, i, value) => onStatusChange(value)}
        style={{ width: 200 }}
        autoWidth={false}
      >
        {supportedStatuses.map((supportedStatus, index) => (
          <MenuItem key={index} value={supportedStatus.value} primaryText={supportedStatus.text} />
        ))}
      </DropDownMenu>
    </ToolsWrapper>
  </Wrapper>
);

ViewOrder.propTypes = {
  supportedStatuses: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  order: PropTypes.shape({
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  ViewOrder,
  graphql`
    fragment ViewOrder_order on Order {
      id
      orderNumber
      firstName
      lastName
      email
      addressLine1
      addressLine2
      city
      state
      zipCode
      phoneNumber
      status
      items {
        id
        quantity
        product {
          id
          name
          price
          mainImage
        }
      }
    }
  `
);
