import React from 'react';
import { createFragmentContainer, QueryRenderer, graphql } from 'react-relay';
import relayEnvironment from 'app/config/relay';
import styled from 'styled-components';
import PageError from 'app/components/Common/PageError';
import PageLoader from 'app/components/Common/PageLoader';
import StoreLayout from 'app/components/Store/Main/StoreLayout';
import Paper from 'app/components/Store/Main/Paper';

class AboutRoute extends React.Component {
  render() {
    const {
      notifier,
      viewer,
    } = this.props;

    return (
      <StoreLayout
        notifier={notifier}
        viewer={viewer}
      >
        <Paper paddings={[ 'top', 'bottom', 'left', 'right' ]}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique odio finibus nisl maximus efficitur vel ut tellus. Curabitur non neque id arcu aliquet volutpat nec a nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ullamcorper accumsan. Donec turpis urna, posuere et ultrices vitae, gravida quis tellus. Integer vitae gravida mi, quis egestas purus. Nunc rutrum, lectus nec sodales sollicitudin, neque ante condimentum eros, imperdiet mattis arcu tellus commodo dui. Suspendisse euismod posuere velit vel tristique. Quisque non lacus a erat accumsan posuere non sit amet neque. Duis aliquam vehicula bibendum. Maecenas gravida sodales felis, quis auctor orci pharetra ut. Aliquam sed commodo felis.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim turpis non quam lobortis, rhoncus consectetur neque sollicitudin. Morbi pulvinar quam vitae vehicula laoreet. Mauris aliquam mi non leo dignissim, eget euismod risus congue. Nunc eget magna quis ante porttitor semper. In a turpis id eros imperdiet tristique nec eget ante. Nam et nibh pretium, pulvinar lectus vel, pulvinar elit. Maecenas vitae fermentum dolor. Donec auctor nisl quis neque accumsan tempor. Pellentesque congue ornare tellus, a condimentum orci aliquam eget. Proin nec consequat tortor. Aliquam venenatis augue odio, sed viverra quam congue maximus. Etiam facilisis purus sit amet lobortis iaculis.</p>

          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas id ullamcorper sem. Aenean vestibulum mollis purus, dictum vulputate ex cursus eu. Aliquam erat volutpat. Nam aliquam vehicula aliquam. Aliquam ac interdum ligula. Duis eleifend eleifend lorem, ut porttitor nibh varius id. Aliquam pulvinar turpis vitae est convallis, in accumsan elit consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet ullamcorper purus. Pellentesque nunc metus, finibus at tellus vel, posuere lobortis lectus. Proin aliquet lacinia metus, ac tristique libero condimentum non.</p>

          <p>In a porttitor nisl. Nam sit amet magna a mi venenatis mollis. Maecenas in sapien justo. Suspendisse vitae odio nisl. Phasellus maximus vulputate tortor, et rhoncus augue faucibus et. Morbi ultricies dignissim consectetur. Suspendisse tempus nulla magna, a viverra nisl aliquam quis. Pellentesque lobortis lacus at blandit lobortis. Quisque ut aliquet nisl. Curabitur sed sodales nisl. Nam rutrum sem vel turpis pharetra maximus eget ullamcorper eros. Sed egestas iaculis lorem, a lacinia eros.</p>

          <p>Praesent id risus euismod, fermentum nisl sit amet, scelerisque ex. Phasellus at pellentesque erat. Nulla facilisi. Maecenas elementum libero nunc, vitae scelerisque risus porttitor ut. Vivamus pharetra nulla sed fermentum tincidunt. Aenean ante erat, imperdiet ut erat quis, consectetur blandit nisi. Praesent magna nibh, maximus ac semper in, malesuada et ante. Phasellus vitae condimentum nulla, nec rhoncus dui. Pellentesque imperdiet placerat turpis, et imperdiet ante posuere ut.</p>
        </Paper>
      </StoreLayout>
    );
  }
}

export default (props) => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query AboutRouteQuery {
        notifier {
          ...StoreLayout_notifier
        }
        viewer {
          ...StoreLayout_viewer
        }
      }
    `}
    render={({ error, props: relayProps }) => {
      if (error) {
        return <PageError error={error} />;
      }

      if (relayProps) {
        return (
          <AboutRoute {...props} {...relayProps} />
        );
      }

      return <PageLoader />;
    }}
  />
);
