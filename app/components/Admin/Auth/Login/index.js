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

  render() {
    const {
      email,
      password,
    } = this.state;

    const {
      submitDisabled,
      emailError,
      passwordError,
      onSubmit,
    } = this.props;

    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Email'}
            errorText={emailError}
            value={email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
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
            disabled={submitDisabled}
            onClick={() => onSubmit({ email, password })}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  buttonDisabled: PropTypes.bool,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
