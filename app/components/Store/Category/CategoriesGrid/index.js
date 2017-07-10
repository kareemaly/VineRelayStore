import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryItem = styled.div`
  padding: 24px;
  width: 33%;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    width: 50%;
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

const CategoryImage = styled.div`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

const CategoryName = styled.h3`
  display: flex;
`;

const CategoriesGrid = ({ categories, onCategoryClick }) => (
  <Grid>
    {categories.edges.map((edge, index) => (
      <CategoryItem onClick={() => onCategoryClick(edge.node.id)} key={index}>
        <CategoryImage
          src={edge.node.coverImage}
        />
        <CategoryName>{edge.node.name}</CategoryName>
      </CategoryItem>
    ))}
  </Grid>
);

CategoriesGrid.propTypes = {
  categories: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        coverImage: PropTypes.string,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
}

export default createFragmentContainer(
  CategoriesGrid,
  graphql`
    fragment CategoriesGrid_categories on CategoryConnection {
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
