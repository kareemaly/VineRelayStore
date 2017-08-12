import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import LoginIcon from 'app/components/Store/Icons/LoginIcon';
import CloseIcon from 'app/components/Store/Icons/CloseIcon';
import EditIcon from 'app/components/Store/Icons/EditIcon';

const OpenedWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 20px;
  background: #444;
  color: #FFF;
`;

const ViewerName = styled.h4`
  margin: 0;
  margin-left: 10px;
`;

const RightPanel = styled.div`
  flex-basis: 100%;
  padding-left: 20px;
`;

const Tools = styled.div`
  display: flex;
`;

const ClosePanel = styled.div`
  padding-right: 30px;
  cursor: pointer;
`;

const OpenedPanel = ({ viewer, children, onClose }) => (
  <OpenedWrapper>
    <LeftPanel>
      <LoginIcon />
      <ViewerName>
        {viewer.displayName}
      </ViewerName>
    </LeftPanel>
    <RightPanel>
      <Tools>
        {children}
      </Tools>
    </RightPanel>
    <ClosePanel onClick={onClose}>
      <CloseIcon width={20} height={20} />
    </ClosePanel>
  </OpenedWrapper>
);

OpenedPanel.propTypes = {
  viewer: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
};

const ClosedWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-left: 1px solid #EEE;
  border-top: 1px solid #EEE;
  cursor: pointer;
`;

const ClosedPanel = ({ onOpen }) => (
  <ClosedWrapper onClick={onOpen}>
    <EditIcon width={20} height={20} />
  </ClosedWrapper>
);

ClosedPanel.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

const AdminFooter = ({ opened, ...props }) =>
  opened ? <OpenedPanel {...props} /> : <ClosedPanel {...props} />;

AdminFooter.propTypes = {
  viewer: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }).isRequired,
  opened: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  AdminFooter,
  graphql`
    fragment AdminFooter_viewer on User {
      displayName
    }
  `
);
