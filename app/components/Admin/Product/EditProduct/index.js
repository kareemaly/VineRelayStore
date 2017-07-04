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

class EditProduct extends React.Component {

  componentWillMount() {
    this.setState({
      product: this.props.product,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.product !== nextProps.product) {
      this.setState({
        product: nextProps.product,
      });
    }
  }

  onChange = (data) => {
    this.setState({
      product: {
        ...this.state.product,
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
      product,
    } = this.state;

    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Name'}
            errorText={errors && errors.name}
            value={product.name}
            onChange={(event) => this.onChange({ name: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Slug'}
            errorText={errors && errors.slug}
            value={product.slug}
            onChange={(event) => this.onChange({ slug: event.target.value })}
          />
        </InputWrapper>
        <ButtonWrapper>
          <RaisedButton
            label={'Save'}
            disabled={submitDisabled}
            onClick={() => onSubmit(product)}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

EditProduct.propTypes = {
  product: PropTypes.shape({
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
  EditProduct,
  graphql`
    fragment EditProduct_product on Product {
      id
      name
      slug
    }
  `
);
