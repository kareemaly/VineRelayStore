import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';

const Image = styled.img`
  width: 60px;
`;

const BrandLogo = ({ brand }) => (
  <Image
    src={brand.logoImage}
  />
);

BrandLogo.propTypes = {
  brand: PropTypes.shape({
    logoImage: PropTypes.string,
  }).isRequired,
};

export default createFragmentContainer(
  BrandLogo,
  graphql`
    fragment BrandLogo_brand on Brand {
      logoImage
    }
  `
);
