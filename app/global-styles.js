import { injectGlobal } from 'styled-components';
import theme from 'app/themes/default';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    color: ${theme.palette.textColor};
    font-family: ${theme.fontFamily};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 200;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 1.8rem;
    line-height: 1.2;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.3;
    margin: 1rem 0;
  }

  h4 {
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 1rem 0;
  }

  h5 {
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 1rem 0;
  }

  h6 {
    font-size: 0.7rem;
    line-height: 1.7;
    margin: 1rem 0;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.7;
    margin: 1rem 0;
  }

  button {
    font-size: 0.8rem;
    line-height: 1.7;
  }

  b, strong {
    font-weight: bold;
  }
`;
