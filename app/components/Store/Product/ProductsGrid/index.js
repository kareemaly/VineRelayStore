import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductItem = styled.div`
  padding: 24px;
  width: 33%;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    width: 50%;
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

const ProductImage = styled.div`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

const ProductName = styled.h3`
  display: flex;
`;

const ProductsGrid = ({ products, onProductClick }) => (
  <Grid>
    {products.edges.map((edge, index) => (
      <ProductItem onClick={() => onProductClick(edge.node.id)} key={index}>
        <ProductImage
          src={edge.node.mainImage}
        />
        <ProductName>{edge.node.name}</ProductName>
      </ProductItem>
    ))}
  </Grid>
);

ProductsGrid.propTypes = {
  products: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        mainImage: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
}

export default createFragmentContainer(
  ProductsGrid,
  graphql`
    fragment ProductsGrid_products on ProductConnection {
      edges {
        node {
          id
          name
          mainImage
        }
      }
    }
  `
);
