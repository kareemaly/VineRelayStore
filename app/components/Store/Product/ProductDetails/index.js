import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import Button from 'app/components/Store/Main/Button';
import PropTypes from 'prop-types';
import breakpoints from 'app/utils/breakpoints';
import RightChevronIcon from 'app/components/Store/Icons/RightChevronIcon';

const Wrapper = styled.div`
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

const LeftWrapper = styled.div`
  flex-basis: 49%;
`;

const RightWrapper = styled.div`
  flex-basis: 49%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductPrice = styled.h4`
`;

const ProductName = styled.h1`
`;

const ProductDescription = styled.p`
`;

const ProductBrand = styled.h3`
  cursor: pointer;
`;

const AddToCartButton = styled(Button)`
  text-transform: uppercase;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RightChevronWrapper = styled.div`
  opacity: 0.2;
  margin: 0 40px;
`;

const BreadcrumbDivider = () =>
  <RightChevronWrapper><RightChevronIcon width={15} height={15} /></RightChevronWrapper>;

const BreadcrumbItem = styled.h5`
  ${(props) => props.onClick && `opacity: 0.8;`}
  ${(props) => props.onClick && `cursor: pointer;`}
`;

const ProductDetails = ({ onHomeClick, onCategoryClick, onBrandClick, isProductInCart, onAddToCartClick, product }) => (
  <Wrapper>
    <Breadcrumb>
      <BreadcrumbItem onClick={onHomeClick}>
        Home
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem onClick={() => onCategoryClick(product.category)}>
        {product.category.name}
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        {product.name}
      </BreadcrumbItem>
    </Breadcrumb>
    <ContentWrapper>
      <LeftWrapper>
        <ProductImage src={product.mainImage} />
      </LeftWrapper>
      <RightWrapper>
        <ProductPrice>${product.price} USD</ProductPrice>
        <ProductName>{product.name}</ProductName>
        <ProductBrand onClick={() => onBrandClick(product.brand)}>{product.brand.name}</ProductBrand>
        <ProductDescription>{product.description}</ProductDescription>
        <AddToCartButton
          primary={!isProductInCart(product)}
          secondary={isProductInCart(product)}
          onClick={() => onAddToCartClick(product)}
        >
          {isProductInCart(product) ? `Remove from cart` : 'Add to cart'}
        </AddToCartButton>
      </RightWrapper>
    </ContentWrapper>
  </Wrapper>
);

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    mainImage: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  isProductInCart: PropTypes.func.isRequired,
  onAddToCartClick: PropTypes.func.isRequired,
  onHomeClick: PropTypes.func.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
  onBrandClick: PropTypes.func.isRequired,
}

export default createFragmentContainer(
  ProductDetails,
  graphql`
    fragment ProductDetails_product on Product {
      id
      name
      price
      description
      mainImage
      category {
        id
        name
      }
      brand {
        id
        name
      }
    }
  `
);
