import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
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

class CreateBrand extends React.Component {

  componentWillMount() {
    this.setState({
      brand: {},
    });
  }

  onChange = (data) => {
    this.setState({
      brand: {
        ...this.state.brand,
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
      brand,
    } = this.state;

    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Name'}
            errorText={errors && errors.name}
            value={brand.name}
            onChange={(event) => this.onChange({ name: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Slug'}
            errorText={errors && errors.slug}
            value={brand.slug}
            onChange={(event) => this.onChange({ slug: event.target.value })}
          />
        </InputWrapper>
        <ButtonWrapper>
          <RaisedButton
            label={'Save'}
            disabled={submitDisabled}
            onClick={() => onSubmit(brand)}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

CreateBrand.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
  submitDisabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  CreateBrand,
  graphql`
    fragment CreateBrand_brand on Brand {
      id
      name
      slug
    }
  `
);
