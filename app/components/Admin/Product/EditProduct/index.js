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

class EditProduct extends React.Component {
  componentWillMount() {
    this.setProductFromProps(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product !== nextProps.product) {
      this.setProductFromProps(nextProps);
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

  setProductFromProps(props) {
    this.setState({
      product: {
        id: props.product.id,
        name: props.product.name,
        slug: props.product.slug,
        mainImage: props.product.mainImage,
        price: props.product.price,
        categoryId: props.product.category.id,
        brandId: props.product.brand.id,
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
          <TextField
            fullWidth
            floatingLabelText={'Main Image Url'}
            errorText={errors && errors.mainImage}
            value={product.mainImage}
            onChange={(event) => this.onChange({ mainImage: event.target.value })}
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

EditProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    mainImage: PropTypes.string,
    price: PropTypes.number,
    brand: PropTypes.shape({
      id: PropTypes.string,
    }),
    category: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  brands: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    mainImage: PropTypes.string,
    price: PropTypes.number,
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
      mainImage
      price
      brand {
        id
      }
      category {
        id
      }
    }

    fragment EditProduct_brands on BrandConnection {
      ...BrandSelector_brands
    }

    fragment EditProduct_categories on CategoryConnection {
      ...CategorySelector_categories
    }
  `
);
