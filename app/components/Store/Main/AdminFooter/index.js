import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  border-top: 1px solid #EEE;
  background: #FFF;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdminFooter = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

AdminFooter.propTypes = {
};

export default AdminFooter;
