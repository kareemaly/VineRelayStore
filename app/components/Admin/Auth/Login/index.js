import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import {
  isValidationError,
  getErrorValidationMessage,
  getErrorMessage,
} from 'app/utils/error';
import loginUserToAdminMutation from './loginUserToAdminMutation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

class Login extends React.Component {

  componentWillMount() {
    this.setState({
      email: '',
      password: '',
    });
  }

  onLoginError = (error) => {
    // Handle validation error
    if(isValidationError(error)) {
      this.setState({
        emailError: getErrorValidationMessage(error, 'email'),
        passwordError: getErrorValidationMessage(error, 'password'),
        isLoading: false,
      });
    // Unexpected errors
    } else {
      this.setState({
        errorMessage: getErrorMessage(error),
        isLoading: false,
      });
    }
  }

  onLoginSuccess = (data) => {
    this.setState({
      isLoading: false,
    });
    // Let container handle success
    this.props.onLoginSuccess(data);
  }

  onComplete = ({ loginUser }, errors) => {
    if(errors) {
      this.onLoginError(errors[0]);
    } else {
      this.onLoginSuccess(loginUser);
    }
  }

  loginHandler = ({ email, password }) => {
    this.setState({
      emailError: '',
      passwordError: '',
      errorMessage: '',
      isLoading: true,
    });

    loginUserToAdminMutation({ email, password }, this.onComplete);
  }

  render() {
    const {
      email,
      password,
      emailError,
      passwordError,
      errorMessage,
      isLoading,
    } = this.state;

    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Email'}
            errorText={emailError}
            value={email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Password'}
            errorText={passwordError}
            type={'password'}
            value={password}
            onChange={(event) => this.setState({ password: event.target.value })}
          />
        </InputWrapper>
        <ButtonWrapper>
          <RaisedButton
            label={'Login'}
            disabled={isLoading}
            onClick={() => this.loginHandler({ email, password })}
          />
        </ButtonWrapper>
        <Snackbar
          open={!!errorMessage}
          message={errorMessage || ''}
          autoHideDuration={4000}
          onRequestClose={() => this.setState({ errorMessage: '' })}
        />
      </Wrapper>
    );
  }
}

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;
