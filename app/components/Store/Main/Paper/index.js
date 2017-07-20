import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth}px;
  margin: 0 auto;
  ${(props) => props.paddings.indexOf('left') > -1 && `padding-left: 16px;`}
  ${(props) => props.paddings.indexOf('right') > -1 && `padding-right: 16px;`}
  ${(props) => props.paddings.indexOf('top') > -1 && `padding-top: 16px;`}
  ${(props) => props.paddings.indexOf('bottom') > -1 && `padding-bottom: 16px;`}
`;

const Paper = ({ children, paddings = [], ...props }) => (
  <Wrapper paddings={paddings} {...props}>
    {children}
  </Wrapper>
);

Paper.propTypes = {
  children: PropTypes.any,
  paddings: PropTypes.arrayOf(PropTypes.string),
};

export default Paper;
