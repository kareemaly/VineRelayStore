import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
`;

const Description = styled.p`
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
        <Description>
          You can login with<br /><b>admin@vinerelay.com</b> and <b>vinerelay123</b>
        </Description>
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
  submitDisabled: PropTypes.bool.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
