import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import BrandSelector from 'app/components/Admin/Brand/BrandSelector';
import CategorySelector from 'app/components/Admin/Category/CategorySelector';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

class CreateProduct extends React.Component {

  componentWillMount() {
    this.setState({
      product: {},
    });
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
      brands,
      categories,
    } = this.props;

    const {
      product,
    } = this.state;

    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Name'}
            errorText={errors && errors.name}
            value={product.name}
            onChange={(event) => this.onChange({ name: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Slug'}
            errorText={errors && errors.slug}
            value={product.slug}
            onChange={(event) => this.onChange({ slug: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Price'}
            errorText={errors && errors.price}
            value={product.price}
            onChange={(event) => this.onChange({ price: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <BrandSelector
            selectedBrandId={product.brandId}
            brands={brands}
            onChange={(brandId) => this.onChange({ brandId })}
          />
        </InputWrapper>
        <InputWrapper>
          <CategorySelector
            selectedCategoryId={product.categoryId}
            categories={categories}
            onChange={(categoryId) => this.onChange({ categoryId })}
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

CreateProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    brandId: PropTypes.string,
    categoryId: PropTypes.string,
  }).isRequired,
  brands: PropTypes.shape.isRequired,
  categories: PropTypes.shape.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    brandId: PropTypes.string,
    categoryId: PropTypes.string,
  }),
  submitDisabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  CreateProduct,
  graphql`
    fragment CreateProduct_brands on BrandConnection {
      ...BrandSelector_brands
    }

    fragment CreateProduct_categories on CategoryConnection {
      ...CategorySelector_categories
    }
  `
);
