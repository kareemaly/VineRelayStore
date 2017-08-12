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

const ListBrands = ({ brands, onRemoveBrand, onEditBrand }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Tools</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {brands.edges.map((edge) => (
        <TableRow key={edge.node.id}>
          <TableRowColumn>{edge.node.name}</TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              primary
              onClick={() => {
                onEditBrand(edge.node.id);
              }}
              label={'Edit'}
            />
            <RaisedButton
              secondary
              onClick={() => {
                onRemoveBrand(edge.node.id);
              }}
              label={'Delete'}
            />
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ListBrands.propTypes = {
  brands: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onEditBrand: PropTypes.func.isRequired,
  onRemoveBrand: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  ListBrands,
  graphql`
    fragment ListBrands_brands on BrandConnection {
      edges {
        node {
          id
          name
        }
      }
    }
  `
);
