import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import { withRouter } from 'react-router';
import relayEnvironment from 'app/config/relay';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import DashboardLayout from 'app/components/Admin/Main/DashboardLayout';
import Link from 'app/components/Admin/Main/Link';
import Paper from 'app/components/Admin/Main/Paper';
import Grid from 'app/components/Store/Main/Grid';

import CubesIcon from 'app/components/Store/Icons/CubesIcon';
import ListIcon from 'app/components/Store/Icons/ListIcon';
import TagIcon from 'app/components/Store/Icons/TagIcon';
import ShipIcon from 'app/components/Store/Icons/ShipIcon';

const Box = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const BoxIconWrapper = styled.div`
  margin-right: 10px;
`;

const BoxTitle = styled.h2`
`;

class DefaultRoute extends React.Component {
  componentWillMount() {
    // Not an admin so we need to change route
    if(! this.props.viewer.isAdmin) {
      this.props.history.replace(`/admin/login`);
    }
  }

  render() {
    const {
      viewer,
    } = this.props;

    const iconSize = 60;

    return (
      <DashboardLayout viewer={viewer}>
        <Paper paddings={[ 'left', 'right' ]} zDepth={0}>
          <Grid
            itemsPerRow={{
              largeDesktop: 4,
              desktop: 3,
              tablet: 2,
              mobile: 1,
            }}
          >
            <Box to='/admin/products'>
              <BoxIconWrapper>
                <CubesIcon width={iconSize} height={iconSize} />
              </BoxIconWrapper>
              <BoxTitle>
                Products
              </BoxTitle>
            </Box>
            <Box to='/admin/categories'>
              <BoxIconWrapper>
                <ListIcon width={iconSize} height={iconSize} />
              </BoxIconWrapper>
              <BoxTitle>
                Categories
              </BoxTitle>
            </Box>
            <Box to='/admin/brands'>
              <BoxIconWrapper>
                <TagIcon width={iconSize} height={iconSize} />
              </BoxIconWrapper>
              <BoxTitle>
                Brands
              </BoxTitle>
            </Box>
            <Box to='/admin/orders'>
              <BoxIconWrapper>
                <ShipIcon width={iconSize} height={iconSize} />
              </BoxIconWrapper>
              <BoxTitle>
                Orders
              </BoxTitle>
            </Box>
          </Grid>
        </Paper>
      </DashboardLayout>
    );
  }
}

const DefaultRouteContainer = createFragmentContainer(
  withRouter(DefaultRoute),
  graphql`
    fragment DefaultRoute_viewer on User {
      firstName
      isAdmin
      ...DashboardLayout_viewer
    }
  `
);

export default () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query DefaultRouteQuery {
        viewer {
          ...DefaultRoute_viewer
        }
      }
    `}
    render={({ error, props }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (props) {
        return <DefaultRouteContainer {...props} />;
      }

      return <PageLoader />;
    }}
  />
);
