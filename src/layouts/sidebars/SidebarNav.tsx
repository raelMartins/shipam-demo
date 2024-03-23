'use client';

import { Box, Link as ChakraLink, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const SidebarNav = () => {
  const [test, setTest] = useState();

  const pathname = usePathname().split('/')[1];
  console.log(pathname);
  return (
    <Box w="31rem">
      <VStack alignItems={'flex-start'} w="100%">
        <ChakraLink
          as={Link}
          href="/dashboard"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'dashboard' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'dashboard' ? '#1c1c1c' : '#565656'}
        >
          Dashboard
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/orders"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'orders' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'orders' ? '#1c1c1c' : '#565656'}
        >
          Orders
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/wishlist"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'wishlist' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'wishlist' ? '#1c1c1c' : '#565656'}
        >
          Wishlist
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/product-reviews"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'product-reviews' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'product-reviews' ? '#1c1c1c' : '#565656'}
        >
          Product Reviews
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/cart"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'cart' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'cart' ? '#1c1c1c' : '#565656'}
        >
          Cart
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/account"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'account' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'account' ? '#1c1c1c' : '#565656'}
        >
          Personal Info
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/faqs"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'faqs' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'faqs' ? '#1c1c1c' : '#565656'}
        >
          FAQs
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/notifications"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          bg={pathname === 'notifications' ? '#DEE2E6' : 'transparent'}
          _hover={{ textDecor: 'none' }}
          color={pathname === 'notifications' ? '#1c1c1c' : '#565656'}
        >
          Notifications
        </ChakraLink>
        <ChakraLink
          as={Link}
          href="/auth/login"
          p="1.1rem 1.5rem"
          borderRadius={'.64rem'}
          fontSize={'1.6rem'}
          w="100%"
          color={'#565656'}
          _hover={{ textDecor: 'none' }}
        >
          Logout
        </ChakraLink>
      </VStack>
    </Box>
  );
};
