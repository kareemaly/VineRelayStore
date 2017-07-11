import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

class CheckoutForm extends React.Component {

  componentWillMount() {
    this.setState({
      order: {
        firstName: 'kareem',
        lastName: 'mohamed',
        email: 'k@goodsense.jp',
        addressLine1: 'Kareem Portsaid',
        addressLine2: '',
        city: 'Portsaid',
        state: 'Egypt',
        zipCode: '12345',
        phoneNumber: '01203123',
      }
    });
  }

  onChange = (data) => {
    this.setState({
      order: {
        ...this.state.order,
        ...data,
      },
    });
  }

  render() {
    const {
      errors,
      submitDisabled,
      onSubmit,
    } = this.props;

    const {
      order,
    } = this.state;

    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'First name'}
            errorText={errors && errors.firstName}
            value={order.firstName}
            onChange={(event) => this.onChange({ firstName: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Last name'}
            errorText={errors && errors.lastName}
            value={order.lastName}
            onChange={(event) => this.onChange({ lastName: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Email'}
            errorText={errors && errors.email}
            value={order.email}
            onChange={(event) => this.onChange({ email: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Address Line 1'}
            errorText={errors && errors.addressLine1}
            value={order.addressLine1}
            onChange={(event) => this.onChange({ addressLine1: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Address Line 2'}
            errorText={errors && errors.addressLine2}
            value={order.addressLine2}
            onChange={(event) => this.onChange({ addressLine2: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'City'}
            errorText={errors && errors.city}
            value={order.city}
            onChange={(event) => this.onChange({ city: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'State'}
            errorText={errors && errors.state}
            value={order.state}
            onChange={(event) => this.onChange({ state: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Zip code'}
            errorText={errors && errors.zipCode}
            value={order.zipCode}
            onChange={(event) => this.onChange({ zipCode: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Phone Number'}
            errorText={errors && errors.phoneNumber}
            value={order.phoneNumber}
            onChange={(event) => this.onChange({ phoneNumber: event.target.value })}
          />
        </InputWrapper>
        <ButtonWrapper>
          <RaisedButton
            label={'Save'}
            disabled={submitDisabled}
            onClick={() => onSubmit(order)}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default CheckoutForm;
