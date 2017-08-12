import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import CategoryLogo from '../CategoryLogo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryName = styled.h3`
  display: flex;
`;

const LogoWrapper = styled.div`
  margin-right: 10px;
`;

const CategoryHeader = ({ category }) => (
  <Wrapper>
    <LogoWrapper>
      <CategoryLogo
        category={category}
      />
    </LogoWrapper>
    <CategoryName>{category.name}</CategoryName>
  </Wrapper>
);

CategoryHeader.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default createFragmentContainer(
  CategoryHeader,
  graphql`
    fragment CategoryHeader_category on Category {
      name
      ...CategoryLogo_category
    }
  `
);
