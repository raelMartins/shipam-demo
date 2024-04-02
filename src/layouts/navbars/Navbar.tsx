'use client';

import { Box, Button } from '@chakra-ui/react';
import { LoggedOutNavbar } from './LoggedOutNavbar';
import { LoggedInNavbar } from './LoggedInNavbar';
import { catch_async_error } from 'utils/helpers/helper_functions';
import { useEffect, useState } from 'react';
import { get_user_profile } from 'utils/api_calls/auth_api_calls';
import { getCookie } from 'cookies-next';

export const Navbar = ({
  user_type = '',
  loggedout = false
}: {
  user_type?: string;
  profile?: any;
  loggedout?: boolean;
}) => {
  // const current_navbar = {

  // }[user_type]
  const [profile, set_profile] = useState('');
  const user_id = getCookie('shipam_user_id');

  const fetch_my_profile = async () => {
    if (user_id) {
      const res = await get_user_profile({ user_id });
      console.log(res);
      set_profile(res);
    }
  };

  useEffect(() => {
    if (user_id) {
      fetch_my_profile();
    }
  }, [user_id]);

  return (
    <Box>
      {!loggedout ? (
        <LoggedInNavbar type={user_type} profile={profile} />
      ) : (
        <LoggedOutNavbar type={user_type} />
      )}
    </Box>
  );
};
