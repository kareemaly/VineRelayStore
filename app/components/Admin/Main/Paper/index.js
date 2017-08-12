import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MaterialPaper from 'material-ui/Paper';

const StyledMaterialPaper = styled(MaterialPaper)`
  max-width: ${(props) => props.theme.maxWidth}px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  ${(props) => props.paddings.indexOf('left') > -1 && 'padding-left: 16px;'}
  ${(props) => props.paddings.indexOf('right') > -1 && 'padding-right: 16px;'}
  ${(props) => props.paddings.indexOf('top') > -1 && 'padding-top: 16px;'}
  ${(props) => props.paddings.indexOf('bottom') > -1 && 'padding-bottom: 16px;'}
`;

const Paper = ({ paddings = [], children, ...props }) => (
  <StyledMaterialPaper
    {...props}
  >
    <ContentWrapper paddings={paddings}>
      {children}
    </ContentWrapper>
  </StyledMaterialPaper>
);

Paper.propTypes = {
  children: PropTypes.any.isRequired,
  paddings: PropTypes.arrayOf(PropTypes.string),
};

export default Paper;
