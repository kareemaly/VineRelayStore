import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FontsRoute = () => (
  <Wrapper>
    <h1>H1 FONT</h1>
    <h2>H2 FONT</h2>
    <h3>H3 FONT</h3>
    <h4>H4 FONT</h4>
    <h5>H5 FONT</h5>
    <h6>H6 FONT</h6>
    <p>P FONT</p>
    <button>BUTTON FONT</button>
  </Wrapper>
);

export default FontsRoute;
