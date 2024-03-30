'use client';

import { Box, Button } from '@chakra-ui/react';
import { LoggedOutNavbar } from './LoggedOutNavbar';
import { LoggedInNavbar } from './LoggedInNavbar';
import { catch_async_error } from 'utils/helpers/helper_functions';
import { useEffect, useState } from 'react';

export const Navbar = ({
  user_type = '',
  profile = { name: 'test' }
}: {
  user_type?: string;
  profile?: any;
}) => {
  // const current_navbar = {

  // }[user_type]
  const [dummyProfile, setDummyProfile] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('shipam-profile');
    if (token) {
      const my_profile = JSON.stringify(token);
      setDummyProfile(my_profile);
    }
  }, []);

  return (
    <Box>
      {dummyProfile || profile ? (
        <LoggedInNavbar type={user_type} profile={profile} />
      ) : (
        <LoggedOutNavbar type={user_type} />
      )}
    </Box>
  );
};
