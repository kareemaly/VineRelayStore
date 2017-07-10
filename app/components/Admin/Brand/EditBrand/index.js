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

class EditBrand extends React.Component {

  componentWillMount() {
    this.setState({
      brand: this.props.brand,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.brand !== nextProps.brand) {
      this.setState({
        brand: nextProps.brand,
      });
    }
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
        <InputWrapper>
          <TextField
            floatingLabelText={'Logo Image Url'}
            errorText={errors && errors.logoImage}
            value={brand.logoImage}
            onChange={(event) => this.onChange({ logoImage: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Cover Image Url'}
            errorText={errors && errors.coverImage}
            value={brand.coverImage}
            onChange={(event) => this.onChange({ coverImage: event.target.value })}
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

EditBrand.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    coverImage: PropTypes.string,
    logoImage: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    coverImage: PropTypes.string,
    logoImage: PropTypes.string,
  }),
  submitDisabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  EditBrand,
  graphql`
    fragment EditBrand_brand on Brand {
      id
      name
      slug
      coverImage
      logoImage
    }
  `
);
