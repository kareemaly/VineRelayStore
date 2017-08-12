import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';

const Image = styled.img`
  width: 60px;
`;

const CategoryLogo = ({ category }) => (
  <Image
    src={category.logoImage}
  />
);

CategoryLogo.propTypes = {
  category: PropTypes.shape({
    logoImage: PropTypes.string,
  }).isRequired,
};

export default createFragmentContainer(
  CategoryLogo,
  graphql`
    fragment CategoryLogo_category on Category {
      logoImage
    }
  `
);
