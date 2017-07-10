import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';
import BrandLogo from '../BrandLogo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BrandName = styled.h3`
  display: flex;
`;

const LogoWrapper = styled.div`
  margin-right: 10px;
`;

const BrandHeader = ({ brand }) => (
  <Wrapper>
    <LogoWrapper>
      <BrandLogo
        brand={brand}
      />
    </LogoWrapper>
    <BrandName>{brand.name}</BrandName>
  </Wrapper>
);

BrandHeader.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
}

export default createFragmentContainer(
  BrandHeader,
  graphql`
    fragment BrandHeader_brand on Brand {
      name
      ...BrandLogo_brand
    }
  `
);
