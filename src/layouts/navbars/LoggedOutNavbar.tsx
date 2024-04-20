'use client';
import { Badge, Box, Flex, Link } from '@chakra-ui/react';
import { ShipamLogoDefault } from 'components/design_icons';
import styles from './loggedoutnavbar.module.scss';
import { useEffect, useRef } from 'react';
// import Link from 'next/link';
import { UserTypeSwitch } from './UserTypeSwitch';
import { Button } from 'ui-lib';

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
          <Link href="/">
            <ShipamLogoDefault />
          </Link>
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
          {type && <UserTypeSwitch type={type} />}
          <Link
            // as={Button}
            href={'/auth/login'}
            font-size="1.6rem"
            fontWeight="400"
            opacity="0.95"
            fontFamily="var(--font_segoe)"
            padding="1.2rem 2.4rem"
            borderRadius="0.64rem"
            border="0.16rem solid"
            lineHeight="100%"
            transition="0.3s"
            color="var(--shipam-primary-red)"
            _hover={{
              opacity: '1',
              textDecoration: 'none'
            }}
            _active={{
              opacity: '1',
              textDecoration: 'none'
            }}
            _focus={{
              opacity: '1',
              textDecoration: 'none'
            }}
          >
            Sign In
          </Link>
          <Link
            href={type ? `/auth/register` : '/auth/join-shipam'}
            font-size="1.6rem"
            fontWeight="400"
            opacity="0.95"
            fontFamily="var(--font_segoe)"
            padding="1.2rem 2.4rem"
            borderRadius="0.64rem"
            border="0.16rem solid"
            lineHeight="100%"
            transition="0.3s"
            background="var(--shipam-primary-red)"
            color="#ffffff"
            _hover={{
              opacity: '1',
              textDecoration: 'none'
            }}
            _active={{
              opacity: '1',
              textDecoration: 'none'
            }}
            _focus={{
              opacity: '1',
              textDecoration: 'none'
            }}
          >
            Join Shipam
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
