import React from 'react';
import { withRouter } from 'react-router';
import { createFragmentContainer, graphql } from 'react-relay';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Login from 'app/components/Admin/Auth/Login';
import { setToken } from 'app/utils/token';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EEE;
`;

const LoginWrapper = styled(Paper)`
  padding: 16px;
`;

class LoginRoute extends React.Component {

  componentWillMount() {
    if(this.props.viewer.isAdmin) {
      this.props.history.replace(`/admin`);
    }
  }

  render() {
    return (
      <Wrapper>
        <LoginWrapper>
          <Login
            onLoginSuccess={({ token }) => {
              // Set token and change location to admin
              setToken(token);
              this.props.history.replace(`/admin`);
            }}
          />
        </LoginWrapper>
      </Wrapper>
    );
  }
}

export default createFragmentContainer(
  withRouter(LoginRoute),
  graphql`
    fragment LoginRoute_viewer on User {
      isAdmin
    }
  `
);
