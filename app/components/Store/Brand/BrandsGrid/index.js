import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import Grid from 'app/components/Store/Main/Grid';

const BrandItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const BrandImage = styled.div`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 150px;
`;

const BrandName = styled.h3`
`;

const BrandsGrid = ({ brands, onBrandClick }) => (
  <Grid
    itemsPerRow={{
      mobile: 1,
      tablet: 2,
      desktop: 3,
    }}
  >
    {brands.edges.map((edge) => (
      <BrandItem
        onClick={() => onBrandClick(edge.node.id)}
        key={edge.node.id}
      >
        <BrandImage
          src={edge.node.coverImage}
        />
        <BrandName>{edge.node.name}</BrandName>
      </BrandItem>
    ))}
  </Grid>
);

BrandsGrid.propTypes = {
  brands: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        coverImage: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onBrandClick: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  BrandsGrid,
  graphql`
    fragment BrandsGrid_brands on BrandConnection {
      edges {
        node {
          id
          name
          coverImage
        }
      }
    }
  `
);
