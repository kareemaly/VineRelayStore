import styled from 'styled-components';

export default styled.button`
  padding: 10px 20px;
  cursor: pointer;
  ${(props) => props.primary && `
    border: 1px solid #AAA;
    background: #FFF;
  `}
  ${(props) => props.secondary && `
    border: 1px solid #555;
    background: #555;
    color: #FFF;
  `}
`;
