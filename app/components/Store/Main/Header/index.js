import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from 'app/components/Store/Main/Paper';
import LoginIcon from 'app/components/Store/Icons/LoginIcon';
import logoImage from 'app/assets/main/logo.png';

const Wrapper = styled(Paper)`
  display: flex;
  justify-content: space-between;
  height: ${(props) => props.theme.headerHeight}px;
`;

const LeftWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Logo = styled.h2`
  width: auto;
  height: 60%;
`;

const RightWrapper = styled.div`
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;
  cursor: pointer;
`;

const MenuItemNotifier = styled.h6`
  margin-left: 5px;
  color: #F00;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const Header = ({
  onHomeClick,
  onAboutClick,
  onCategoriesClick,
  onBrandsClick,
  onCartClick,
  cartItemsNumber,
  onAdminClick,
}) => (
  <Wrapper paddings={['left', 'right']}>
    <LeftWrapper>
      <Logo>
        VineRelay
      </Logo>
    </LeftWrapper>
    <RightWrapper>
      <Menu>
        <MenuItem onClick={onHomeClick}>Home</MenuItem>
        <MenuItem onClick={onAboutClick}>About Us</MenuItem>
        <MenuItem onClick={onCategoriesClick}>Categories</MenuItem>
        <MenuItem onClick={onBrandsClick}>Brands</MenuItem>
        <MenuItem onClick={onCartClick}>
          Cart
          {!!cartItemsNumber && <MenuItemNotifier>({cartItemsNumber})</MenuItemNotifier>}
        </MenuItem>
        <MenuItem onClick={onAdminClick}>
          <IconWrapper>
            <LoginIcon />
          </IconWrapper>
          Admin
        </MenuItem>
      </Menu>
    </RightWrapper>
  </Wrapper>
);

Header.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onCategoriesClick: PropTypes.func.isRequired,
  onAboutClick: PropTypes.func.isRequired,
  onBrandsClick: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
  onAdminClick: PropTypes.func.isRequired,
  cartItemsNumber: PropTypes.number.isRequired,
};

export default Header;
