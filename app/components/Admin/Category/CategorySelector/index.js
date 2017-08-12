import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const CategorySelector = ({ categories, selectedCategoryId, onChange }) => (
  <SelectField
    floatingLabelText="Select category"
    value={selectedCategoryId}
    onChange={(e, i, value) => onChange(value)}
  >
    {categories.edges.map((edge) => (
      <MenuItem
        key={edge.node.id}
        value={edge.node.id}
        primaryText={edge.node.name}
      />
    ))}
  </SelectField>
);

CategorySelector.propTypes = {
  categories: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  selectedCategoryId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  CategorySelector,
  graphql`
    fragment CategorySelector_categories on CategoryConnection {
      edges {
        node {
          id
          name
        }
      }
    }
  `
);
