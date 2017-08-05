import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #900;
  color: #FFF;
`;

const Message = styled.h5`
  margin: 0;
  padding: 5px;
`;

const Notifier = ({ notifier }) => (
  <Wrapper>
    <Message>
      {notifier.message}
    </Message>
  </Wrapper>
);

export default createFragmentContainer(
  Notifier,
  graphql`
    fragment Notifier_notifier on Notifier {
      message
    }
  `
);
