import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import {
  grey100,
  orange100,
  lightBlue100,
  lightGreen100,
  red100,
} from 'material-ui/styles/colors';

const getColorFromStatus = (statusText) => {
  switch(statusText) {
    case 'Unconfirmed':
      return grey100;
    case 'Confirmed':
      return orange100;
    case 'Out for delivery':
      return lightBlue100;
    case 'Delivered':
      return lightGreen100;
    case 'Failed':
      return red100;
  }
}

const ListOrders = ({ orders, onRemoveOrder, onViewOrder }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Order#</TableHeaderColumn>
        <TableHeaderColumn>User email</TableHeaderColumn>
        <TableHeaderColumn>Order status</TableHeaderColumn>
        <TableHeaderColumn>Tools</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {orders.edges.map((edge, index) => (
        <TableRow key={index}>
          <TableRowColumn>{edge.node.orderNumber}</TableRowColumn>
          <TableRowColumn>{edge.node.email}</TableRowColumn>
          <TableRowColumn>
            <Chip
              backgroundColor={getColorFromStatus(edge.node.statusText)}
            >
              {edge.node.statusText}
            </Chip>
          </TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              primary
              onClick={() => {
                onViewOrder(edge.node.id);
              }}
              label={'View'}
            />
            <RaisedButton
              secondary
              onClick={() => {
                onRemoveOrder(edge.node.id);
              }}
              label={'Delete'}
            />
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ListOrders.propTypes = {
  orders: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        orderNumber: PropTypes.string,
        email: PropTypes.string,
        statusText: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onViewOrder: PropTypes.func.isRequired,
  onRemoveOrder: PropTypes.func.isRequired,
}

export default createFragmentContainer(
  ListOrders,
  graphql`
    fragment ListOrders_orders on OrderConnection {
      edges {
        node {
          id
          orderNumber
          email
          statusText
        }
      }
    }
  `
);
