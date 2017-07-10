import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';

const Wrapper = styled.div`
  display: flex;
`;

const ProductName = styled.h3`
  display: flex;
`;

const ProductDetails = ({ product }) => (
  <Wrapper>
    <ProductName>{product.name}</ProductName>
  </Wrapper>
);

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
}

export default createFragmentContainer(
  ProductDetails,
  graphql`
    fragment ProductDetails_product on Product {
      name
    }
  `
);
