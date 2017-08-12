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

const ListProducts = ({ products, onRemoveProduct, onEditProduct }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Tools</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {products.edges.map((edge) => (
        <TableRow key={edge.node.id}>
          <TableRowColumn>{edge.node.name}</TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              primary
              onClick={() => {
                onEditProduct(edge.node.id);
              }}
              label={'Edit'}
            />
            <RaisedButton
              secondary
              onClick={() => {
                onRemoveProduct(edge.node.id);
              }}
              label={'Delete'}
            />
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ListProducts.propTypes = {
  products: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onEditProduct: PropTypes.func.isRequired,
  onRemoveProduct: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  ListProducts,
  graphql`
    fragment ListProducts_products on ProductConnection {
      edges {
        node {
          id
          name
        }
      }
    }
  `
);
