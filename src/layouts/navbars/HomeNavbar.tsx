'use client';

import {
  Badge,
  Box,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  Link,
  Select,
  Text,
  VStack
} from '@chakra-ui/react';
import { ShipamLogoDefault, ShipamLogoWhite } from 'components/design_icons';
import styles from './homenavbar.module.scss';
import { FaUser } from 'react-icons/fa';
import { Button } from 'ui-lib';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';
import { CategoryDropdown } from 'components/general_product/CategoryDropDown';
import { useEffect, useState } from 'react';
import { get_user_profile } from 'utils/api_calls/auth_api_calls';
import { getCookie } from 'cookies-next';
import { HiOutlineUser } from 'react-icons/hi';

export const HomeNavbar = ({ type }: { type?: string }) => {
  // const

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
    <Box
      className={styles.home_navbar}
      w={'full'}
      p={'2rem 1rem'}
      bg="transparent"
      // color={'#fff'}
    >
      <Flex
        // w={{ base: '90%', md: '75%' }}
        m="0rem auto"
        align={'center'}
        justify={'space-between'}
        maxWidth={'148.4rem'}
        width={'100%'}
        margin="0rem auto"
        gap={'2rem'}
      >
        <Flex align={'center'} gap={'3rem'}>
          <ShipamLogoWhite />
        </Flex>
        <InputGroup
          maxW={'67rem'}
          border=".16rem solid #000000"
          display={'flex'}
          alignItems="center"
          fontSize="1.6rem"
          borderRadius={'6rem'}
          bg="#FFFFFF4D"
        >
          <Input
            type="text"
            flex="1"
            w="100%"
            fontSize="1.6rem"
            p="2rem"
            borderRadius={'none'}
            border={'none'}
            bg="transparent"
            _focus={{ outline: 'none' }}
            _focusVisible={{ outline: 'none' }}
          />
          <Button
            p="2rem"
            fontSize="1.6rem"
            borderRadius={'0rem 6rem 6rem 0rem'}
            color="#000000"
            border="none"
            bg="transparent"
          >
            Search
          </Button>
        </InputGroup>
        {profile ? (
          <HStack gap="2rem" color="#8B96A5">
            <Link _hover={{ textDecoration: 'none' }} href="/account">
              <VStack gap={'.7rem'}>
                <FaUser fontSize={'2rem'} />
                <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
                  Profile
                </Text>
              </VStack>
            </Link>
            <Link _hover={{ textDecoration: 'none' }} href="/inbox">
              <VStack gap={'.7rem'}>
                <BsChatLeftTextFill fontSize={'2rem'} />
                <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
                  Message
                </Text>
              </VStack>
            </Link>
            <Link _hover={{ textDecoration: 'none' }} href="/orders">
              <VStack gap={'.7rem'}>
                <AiFillHeart fontSize={'2rem'} />
                <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
                  Orders
                </Text>
              </VStack>
            </Link>
            <Link _hover={{ textDecoration: 'none' }} href="/cart">
              <VStack gap={'.7rem'}>
                <ImCart fontSize={'2rem'} />
                <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
                  My Cart
                </Text>
              </VStack>
            </Link>
          </HStack>
        ) : (
          <Flex gap={'2rem'} className={styles.login_buttons}>
            <Link href={'/auth/login'} className={styles.button}>
              <HiOutlineUser />
              Sign In
            </Link>
            <Link
              href={type ? `/auth/register` : '/auth/join-shipam'}
              className={styles.button}
            >
              Sign Up
            </Link>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
