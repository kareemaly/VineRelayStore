import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import LeftChevronIcon from 'app/components/Store/Icons/LeftChevronIcon';
import RightChevronIcon from 'app/components/Store/Icons/RightChevronIcon';
import Button from 'app/components/Store/Main/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`

`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #EEE;
`;

const InputWrapper = styled.div`
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const RequiredWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const BackButtonIcon = styled(LeftChevronIcon)`
  opacity: 0.5;
  margin-right: 10px;
`;

const CheckoutButtonIcon = styled(RightChevronIcon)`
  opacity: 0.5;
  margin-left: 10px;
`;

class CheckoutForm extends React.Component {
  componentWillMount() {
    this.setState({
      order: {
        firstName: '',
        lastName: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
      },
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
      onBackToCartClick,
    } = this.props;

    const {
      order,
    } = this.state;

    return (
      <Wrapper>
        <Title>
          Delivery Address
        </Title>
        <Divider />
        <RequiredWrapper>
          <small>* Required field</small>
        </RequiredWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*First name'}
            errorText={errors && errors.firstName}
            value={order.firstName}
            onChange={(event) => this.onChange({ firstName: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*Last name'}
            errorText={errors && errors.lastName}
            value={order.lastName}
            onChange={(event) => this.onChange({ lastName: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*Email'}
            errorText={errors && errors.email}
            value={order.email}
            onChange={(event) => this.onChange({ email: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*Address Line 1'}
            errorText={errors && errors.addressLine1}
            value={order.addressLine1}
            onChange={(event) => this.onChange({ addressLine1: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Address Line 2'}
            errorText={errors && errors.addressLine2}
            value={order.addressLine2}
            onChange={(event) => this.onChange({ addressLine2: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*City'}
            errorText={errors && errors.city}
            value={order.city}
            onChange={(event) => this.onChange({ city: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*State'}
            errorText={errors && errors.state}
            value={order.state}
            onChange={(event) => this.onChange({ state: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*Zip code'}
            errorText={errors && errors.zipCode}
            value={order.zipCode}
            onChange={(event) => this.onChange({ zipCode: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'*Phone Number'}
            errorText={errors && errors.phoneNumber}
            value={order.phoneNumber}
            onChange={(event) => this.onChange({ phoneNumber: event.target.value })}
          />
        </InputWrapper>
        <ButtonsWrapper>
          <Button
            primary
            disabled={submitDisabled}
            onClick={onBackToCartClick}
          >
            <BackButtonIcon />
            Back to cart
          </Button>
          <Button
            primary
            disabled={submitDisabled}
            onClick={() => onSubmit(order)}
          >
            Checkout
            <CheckoutButtonIcon />
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

CheckoutForm.propTypes = {
  errors: PropTypes.object,
  submitDisabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onBackToCartClick: PropTypes.func.isRequired,
};

export default CheckoutForm;
