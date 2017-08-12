import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SmallDivider = styled.div`
  width: 60px;
  height: 1px;
  background: #FFF;
`;

const Title = ({ children }) => (
  <TitleWrapper>
    <h1>{children}</h1>
    <SmallDivider />
  </TitleWrapper>
);

Title.propTypes = {
  children: PropTypes.any.isRequired,
};

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - ${(props) => props.theme.headerHeight}px - 50vh);
`;

const AbsolutePosition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Hero = styled(AbsolutePosition)`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  height: 100%;
  filter: brightness(0.3);
`;

const HeroContentWrapper = styled(AbsolutePosition)`
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;


const CategoryHero = ({ category }) => (
  <Wrapper>
    <Hero
      src={category.coverImage}
    />
    <HeroContentWrapper>
      <Title>
        {category.name}
      </Title>
    </HeroContentWrapper>
  </Wrapper>
);

CategoryHero.propTypes = {
  category: PropTypes.shape({
    coverImage: PropTypes.string,
  }).isRequired,
};

export default createFragmentContainer(
  CategoryHero,
  graphql`
    fragment CategoryHero_category on Category {
      name
      coverImage
    }
  `
);
