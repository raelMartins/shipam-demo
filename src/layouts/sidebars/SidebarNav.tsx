'use client';

import { Box, Link as ChakraLink, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const SidebarNav = ({ subdomain }: { subdomain?: string }) => {
  type NavType = {
    route: string;
    pathname: string;
    text: string;
  };

  const buyer_routes: NavType[] = [
    { route: `/dashboard`, pathname: `dashboard`, text: 'Dashboard' },
    { route: `/orders`, pathname: `orders`, text: 'Orders' },
    { route: `/Wishlist`, pathname: `Wishlist`, text: 'Wishlist' },
    {
      route: `/product-reviews`,
      pathname: `product-reviews`,
      text: 'Product Reviews'
    },
    { route: `/cart`, pathname: `cart`, text: 'Cart' },
    { route: `/account`, pathname: `account`, text: 'Personal Info' },
    { route: `/faqs`, pathname: `faqs`, text: 'FAQs' },
    {
      route: `/notifications`,
      pathname: `notifications`,
      text: 'Notifications'
    }
  ];
  const vendor_routes: NavType[] = [
    { route: `/dashboard`, pathname: `dashboard`, text: 'Dashboard' },
    { route: `/transactions`, pathname: `transactions`, text: 'Transactions' },
    { route: `/financials`, pathname: `financials`, text: 'My Financials' },
    { route: `/audit`, pathname: `audit`, text: 'Audit' },
    { route: `/invoice`, pathname: `invoice`, text: 'Invoice' },
    {
      route: `/contract-drafting`,
      pathname: `contract-drafting`,
      text: 'Contract Drafting'
    },
    {
      route: `/demand-forecasting`,
      pathname: `demand-forecasting`,
      text: 'Demand Forecasting'
    },
    { route: `/inventory`, pathname: `inventory`, text: 'Inventory' },
    { route: `/vendor-info`, pathname: `vendor-info`, text: 'Vendor Info' },
    {
      route: `/notifications`,
      pathname: `notifications`,
      text: 'Notifications'
    }
  ];
  const service_routes: NavType[] = [];
  const pathname = usePathname().split('/')[1];
  console.log(pathname);

  const NavItem = ({ item }: { item: NavType }) => {
    return (
      <ChakraLink
        as={Link}
        href={item.route}
        p="1.1rem 1.5rem"
        borderRadius={'.64rem'}
        fontSize={'1.6rem'}
        w="100%"
        bg={pathname === item.pathname ? '#DEE2E6' : 'transparent'}
        _hover={{ textDecor: 'none' }}
        color={pathname === item.pathname ? '#1c1c1c' : '#565656'}
        textTransform={'capitalize'}
      >
        {item.text}
      </ChakraLink>
    );
  };
  return (
    <Box w="31rem">
      <VStack alignItems={'flex-start'} w="100%">
        {subdomain == 'buyer'
          ? buyer_routes.map((el, i) => <NavItem key={i} item={el} />)
          : subdomain == 'vendor'
          ? vendor_routes.map((el, i) => <NavItem key={i} item={el} />)
          : subdomain == 'service'
          ? service_routes.map((el, i) => <NavItem key={i} item={el} />)
          : ''}
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
