import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const PageError = ({ error }) => (
  <Wrapper>
    {error.message}
  </Wrapper>
);

PageError.propTypes = {
  error: PropTypes.object.isRequired,
};

export default PageError;
