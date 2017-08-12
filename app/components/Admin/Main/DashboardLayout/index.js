import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import Link from 'app/components/Admin/Main/Link';
import MenuItem from 'material-ui/MenuItem';

const PageWrapper = styled.div`
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.headerHeight}px;
  justify-content: space-between;
  color: #FFF;
`;

const LogoWrapper = styled.h2`
  display: flex;
  height: 100%;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const ViewerDisplayName = styled.h3`
  margin-right: 10px;
`;

const DrawerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const DrawerHeaderTitle = styled.h2`
  margin: 0;
`;

const DrawerHeaderDetails = styled.p`
  margin: 0;
`;

const Divider = styled.div`
  height: 1px;
  background: #EEE;
`;

const ContentWrapper = styled.div`
  margin-top: 16px;
`;

class DashboardLayout extends React.Component {
  componentWillMount() {
    this.setState({
      drawerOpened: false,
    });
  }

  onRequestChange = (opened) => {
    this.setState({
      drawerOpened: opened,
    });
  }

  openDrawer = () => {
    this.setState({
      drawerOpened: true,
    });
  }

  render() {
    const {
      viewer,
      children,
    } = this.props;

    const {
      drawerOpened,
    } = this.state;

    return (
      <PageWrapper>
        <Drawer
          docked={false}
          onRequestChange={this.onRequestChange}
          open={drawerOpened}
        >
          <DrawerHeader>
            <DrawerHeaderTitle>
              Admin Menu
            </DrawerHeaderTitle>
            <DrawerHeaderDetails>
              {viewer.displayName}
            </DrawerHeaderDetails>
          </DrawerHeader>
          <Divider />
          <Link to="/admin/"><MenuItem>Dashboard</MenuItem></Link>
          <Link to="/admin/products"><MenuItem>Products</MenuItem></Link>
          <Link to="/admin/categories"><MenuItem>Categories</MenuItem></Link>
          <Link to="/admin/brands"><MenuItem>Brands</MenuItem></Link>
          <Link to="/admin/orders"><MenuItem>Orders</MenuItem></Link>
        </Drawer>
        <AppBar
          onLeftIconButtonTouchTap={this.openDrawer}
        >
          <HeaderWrapper>
            <LogoWrapper>RelayStore</LogoWrapper>
            <AvatarWrapper>
              <ViewerDisplayName>
                {viewer.displayName}
              </ViewerDisplayName>
              <Avatar backgroundColor="#FFF" color="#333">
                {viewer.displayName.charAt(0)}
              </Avatar>
            </AvatarWrapper>
          </HeaderWrapper>
        </AppBar>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

DashboardLayout.propTypes = {
  viewer: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default createFragmentContainer(
  DashboardLayout,
  graphql`
    fragment DashboardLayout_viewer on User {
      displayName
      firstName
      lastName
      email
    }
  `
);
