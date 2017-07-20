import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';

const Image = styled.div`
  background: url('${(props) => props.src}');
  background-position: center;
  background-size: cover;
  height: calc(100vh - 30px);
`;

const Hero = ({ src }) => (
  <Image
    src={src}
  />
);

Hero.propTypes = {
  src: PropTypes.string,
};

export default Hero;
