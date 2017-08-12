import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import Button from 'app/components/Store/Main/Button';
import Grid from 'app/components/Store/Main/Grid';
import breakpoints from 'app/utils/breakpoints';

const ProductItem = styled.div`
`;

const ProductImage = styled.div`
  cursor: pointer;
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;

  @media only screen and (max-width: ${breakpoints.desktop}px) {
    height: 320px;
  }

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    height: 340px;
  }
`;

const ProductName = styled.h3`
  cursor: pointer;
  height: 30px;
`;

const ProductPrice = styled.h4`
  opacity: 0.9;
`;

const AddToCartButton = styled(Button)`
  text-transform: uppercase;
`;

const ProductsGrid = ({ products, onProductClick, isProductInCart, onAddToCartClick }) => (
  <Grid
    itemsPerRow={{
      mobile: 1,
      tablet: 2,
      desktop: 3,
    }}
  >
    {products.edges.map((edge) => (
      <ProductItem key={edge.node.id}>
        <ProductImage
          onClick={() => onProductClick(edge.node.id)}
          src={edge.node.mainImage}
        />
        <ProductName
          onClick={() => onProductClick(edge.node.id)}
        >
          {edge.node.name}
        </ProductName>
        <ProductPrice>
          ${edge.node.price}USD
        </ProductPrice>
        <AddToCartButton
          primary={!isProductInCart(edge.node)}
          secondary={isProductInCart(edge.node)}
          onClick={() => onAddToCartClick(edge.node)}
        >
          {isProductInCart(edge.node) ? 'Remove from cart' : 'Add to cart'}
        </AddToCartButton>
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
        price: PropTypes.number,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onProductClick: PropTypes.func.isRequired,
  isProductInCart: PropTypes.func.isRequired,
  onAddToCartClick: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  ProductsGrid,
  graphql`
    fragment ProductsGrid_products on ProductConnection {
      edges {
        node {
          id
          name
          mainImage
          price
        }
      }
    }
  `
);
