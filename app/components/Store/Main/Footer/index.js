import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GithubIcon from 'app/components/Store/Icons/GithubIcon';
import WebsiteIcon from 'app/components/Store/Icons/WebsiteIcon';
import EmailIcon from 'app/components/Store/Icons/EmailIcon';
import breakpoints from 'app/utils/breakpoints';

const ColumnTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SmallDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #EEE;
`;

const ColumnTitle = ({ children }) => (
  <ColumnTitleWrapper>
    <h3>{children}</h3>
    <SmallDivider />
  </ColumnTitleWrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-child) {
    margin-right: 40px;
  }
  flex-basis: 33%;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  padding: 15px 0;
  cursor: pointer;
`;

const ColumnDescription = styled.p`
`;

const IconsWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  padding: 0 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Footer = ({
  onHomeClick,
  onAboutClick,
  onCategoriesClick,
  onBrandsClick,
  onCartClick,
  onGithubClick,
  onWebsiteClick,
  onEmailClick,
}) => (
  <Wrapper>
    <Column>
      <ColumnTitle>
        Main Menu
      </ColumnTitle>
      <List>
        <Item onClick={onHomeClick}>Home</Item>
        <Item onClick={onAboutClick}>About us</Item>
        <Item onClick={onCategoriesClick}>Categories</Item>
        <Item onClick={onBrandsClick}>Brands</Item>
        <Item onClick={onCartClick}>Cart</Item>
      </List>
    </Column>
    <Column>
      <ColumnTitle>
        About us
      </ColumnTitle>
      <ColumnDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </ColumnDescription>
    </Column>
    <Column>
      <ColumnTitle>
        Links
      </ColumnTitle>
      <ColumnDescription>
        Reach to us on the following links
      </ColumnDescription>
      <IconsWrapper>
        <IconWrapper onClick={onGithubClick}><GithubIcon width={25} height={25} /></IconWrapper>
        <IconWrapper onClick={onWebsiteClick}><WebsiteIcon width={25} height={25} /></IconWrapper>
        <IconWrapper onClick={onEmailClick}><EmailIcon width={25} height={25} /></IconWrapper>
      </IconsWrapper>
    </Column>
  </Wrapper>
);

Footer.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onAboutClick: PropTypes.func.isRequired,
  onCategoriesClick: PropTypes.func.isRequired,
  onBrandsClick: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
  onGithubClick: PropTypes.func.isRequired,
  onWebsiteClick: PropTypes.func.isRequired,
  onEmailClick: PropTypes.func.isRequired,
};

export default Footer;
