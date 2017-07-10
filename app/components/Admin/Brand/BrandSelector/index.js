import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';

const BrandSelector = ({ brands, selectedBrandId, onChange }) => (
  <SelectField
    floatingLabelText="Select brand"
    value={selectedBrandId}
    onChange={(e, i, value) => onChange(value)}
  >
    {brands.edges.map((edge, index) => (
      <MenuItem key={index} value={edge.node.id} primaryText={edge.node.name} />
    ))}
  </SelectField>
);

BrandSelector.propTypes = {
  brands: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  selectedBrandId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  BrandSelector,
  graphql`
    fragment BrandSelector_brands on BrandConnection {
      edges {
        node {
          id
          name
        }
      }
    }
  `
);
