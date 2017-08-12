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

const ListCategories = ({ categories, onRemoveCategory, onEditCategory }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Tools</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {categories.edges.map((edge) => (
        <TableRow key={edge.node.id}>
          <TableRowColumn>{edge.node.name}</TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              primary
              onClick={() => {
                onEditCategory(edge.node.id);
              }}
              label={'Edit'}
            />
            <RaisedButton
              secondary
              onClick={() => {
                onRemoveCategory(edge.node.id);
              }}
              label={'Delete'}
            />
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ListCategories.propTypes = {
  categories: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onEditCategory: PropTypes.func.isRequired,
  onRemoveCategory: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  ListCategories,
  graphql`
    fragment ListCategories_categories on CategoryConnection {
      edges {
        node {
          id
          name
        }
      }
    }
  `
);
