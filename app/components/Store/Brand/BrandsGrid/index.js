import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BrandItem = styled.div`
  padding: 24px;
  width: 33%;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    width: 50%;
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

const BrandImage = styled.div`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

const BrandName = styled.h3`
  display: flex;
`;

const BrandsGrid = ({ brands, onBrandClick }) => (
  <Grid>
    {brands.edges.map((edge, index) => (
      <BrandItem onClick={() => onBrandClick(edge.node.id)} key={index}>
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
}

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
