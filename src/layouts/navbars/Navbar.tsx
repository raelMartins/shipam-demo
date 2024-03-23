'use client';

import { Box, Button } from '@chakra-ui/react';
import { LoggedOutNavbar } from './LoggedOutNavbar';
import { LoggedInNavbar } from './LoggedInNavbar';
import { catch_async_error } from 'utils/helpers/helper_functions';

export const Navbar = ({
  user_type = '',
  profile
}: {
  user_type?: string;
  profile?: any;
}) => {
  // const current_navbar = {

  // }[user_type]

  return (
    <Box>
      {profile ? (
        <LoggedInNavbar type={user_type} profile={profile} />
      ) : (
        <LoggedOutNavbar type={user_type} />
      )}
    </Box>
  );
};
