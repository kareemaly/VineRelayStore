import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';
import Hero from 'app/components/Common/Hero';

const BrandHero = ({ brand }) => (
  <Hero
    src={brand.coverImage}
  />
);

BrandHero.propTypes = {
  brand: PropTypes.shape({
    coverImage: PropTypes.string,
  }).isRequired,
}

export default createFragmentContainer(
  BrandHero,
  graphql`
    fragment BrandHero_brand on Brand {
      coverImage
    }
  `
);
