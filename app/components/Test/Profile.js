import React from 'react';
import { createFragmentContainer } from 'react-relay';

const Profile = ({ viewer }) => {
  return (
    <div>
      { viewer && viewer.firstName }
      { viewer && viewer.lastName }
      { viewer && viewer.email }
      { viewer && viewer.displayName }
    </div>
  );
}


export default createFragmentContainer(
  Profile,
  graphql`
    fragment Profile_viewer on User {
      displayName
      firstName
      lastName
      email
    }
  `
);
