import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import Grid from 'app/components/Store/Main/Grid';

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CategoryImage = styled.div`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 150px;
`;

const CategoryName = styled.h3`
`;

const CategoriesGrid = ({ categories, onCategoryClick }) => (
  <Grid
    itemsPerRow={{
      mobile: 1,
      tablet: 2,
      desktop: 3,
    }}
  >
    {categories.edges.map((edge) => (
      <CategoryItem
        onClick={() => onCategoryClick(edge.node.id)}
        key={edge.node.id}
      >
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
};

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
