'use client';
import { Badge, Box, Button, Flex } from '@chakra-ui/react';
import { ShipamLogoDefault } from 'components/design_icons';
import styles from './loggedoutnavbar.module.scss';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const LoggedOutNavbar = ({ type }: { type?: string }) => {
  return (
    <Box
      className={styles.logged_out_navbar}
      w={'full'}
      p={'2rem 1rem'}
      bg="#ffffff"
      borderBottom=".1rem solid #DEE2E6"
    >
      <Flex
        // w={{ base: '90%', md: '75%' }}
        m="0rem auto"
        align={'center'}
        justify={'space-between'}
        maxWidth={'148.4rem'}
        width={'100%'}
        margin="0rem auto"
      >
        <Flex align={'center'} gap={'3rem'}>
          {/* <Link */}
          <ShipamLogoDefault />
          {type && (
            <Box
              textTransform={'capitalize'}
              bg={'var(--shipam-red-pale)'}
              color={'var(--shipam-primary-red)'}
              padding={'1rem 2rem'}
              borderRadius={'3rem'}
              fontSize={'1.2rem'}
              lineHeight={'2.2rem'}
              fontWeight={'700'}
            >
              {type}
            </Box>
          )}
        </Flex>
        <Flex gap={'2rem'} className={styles.login_buttons}>
          <Link href={'/auth/login'} className={styles.button}>
            Sign In
          </Link>
          <Link
            href={type ? `/auth/register` : '/auth/join-shipam'}
            className={styles.button}
          >
            Join Shipam
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
