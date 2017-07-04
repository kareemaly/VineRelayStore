import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MaterialPaper from 'material-ui/Paper';

const StyledMaterialPaper = styled(MaterialPaper)`
  ${(props) => !props.noPadding && `padding: 20px;`}
`;

const Paper = ({ noPadding, ...props }) => (
  <StyledMaterialPaper
    noPadding={noPadding}
    {...props}
  />
);

Paper.propTypes = {
  noPadding: PropTypes.bool,
};

export default Paper;
