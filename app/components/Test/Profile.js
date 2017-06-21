import React from 'react';
import { createFragmentContainer } from 'react-relay';

const Profile = ({ viewer }) => {
  console.log('Profile viewer', viewer );
  return (
    <div>
      { viewer && viewer.firstName }
      { viewer && viewer.lastName }
      { viewer && viewer.email }
      { viewer && viewer.fullName }
      { viewer && viewer.password }
    </div>
  );
}


export default createFragmentContainer(
  Profile,
  graphql`
    fragment Profile_viewer on User {
      fullName
      firstName
      lastName
      email
      password
    }
  `
);
