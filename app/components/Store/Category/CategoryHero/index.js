import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';
import Hero from 'app/components/Common/Hero';

const CategoryHero = ({ category }) => (
  <Hero
    src={category.coverImage}
  />
);

CategoryHero.propTypes = {
  category: PropTypes.shape({
    coverImage: PropTypes.string,
  }).isRequired,
}

export default createFragmentContainer(
  CategoryHero,
  graphql`
    fragment CategoryHero_category on Category {
      coverImage
    }
  `
);
