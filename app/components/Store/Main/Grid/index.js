import React from 'react';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -15px;
  margin-bottom: -15px;
`;

const ItemWrapper = styled.div`
  padding: 15px;
  width: ${(props) => (100 / props.largeDesktopItems)}%;

  @media only screen and (max-width: ${breakpoints.desktop}px) {
    width: ${(props) => (100 / props.desktopItems)}%;
  }

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    width: ${(props) => (100 / props.tabletItems)}%;
  }

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    width: ${(props) => (100 / props.mobileItems)}%;
  }

  @media only screen and (max-width: ${breakpoints.smallMobile}px) {
    width: ${(props) => (100 / props.smallMobileItems)}%;
  }
`;

// Get large desktop items per row
const getLargeDesktopItems = (itemsPerRow) =>
  itemsPerRow.largeDesktop || getDesktopItems(itemsPerRow);

// Get desktop items per row
const getDesktopItems = (itemsPerRow) =>
  itemsPerRow.desktop || getTabletItems(itemsPerRow);

// Get tablet items per row
const getTabletItems = (itemsPerRow) =>
  itemsPerRow.tablet || getMobileItems(itemsPerRow);

// Get mobile items per row
const getMobileItems = (itemsPerRow) =>
  itemsPerRow.mobile || getSmallMobileItems(itemsPerRow);

// Get small mobile items per row
const getSmallMobileItems = (itemsPerRow) =>
  itemsPerRow.smallMobile;

const Grid = ({ children, itemsPerRow, ...props }) => (
  <Wrapper {...props}>
    {children.map((child, index) => (
      <ItemWrapper
        largeDesktopItems={getLargeDesktopItems(itemsPerRow)}
        desktopItems={getDesktopItems(itemsPerRow)}
        tabletItems={getTabletItems(itemsPerRow)}
        mobileItems={getMobileItems(itemsPerRow)}
        smallMobileItems={getSmallMobileItems(itemsPerRow)}
        key={index}
      >
        {child}
      </ItemWrapper>
    ))}
  </Wrapper>
);

Grid.propTypes = {
  children: PropTypes.any.isRequired,
  itemsPerRow: PropTypes.shape({
    largeDesktop: PropTypes.number,
    desktop: PropTypes.number,
    tablet: PropTypes.number,
    mobile: PropTypes.number,
    smallMobile: PropTypes.number,
  }).isRequired,
};

export default Grid;
