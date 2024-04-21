import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import { BuyerAccount } from 'components/buyer/account/BuyerAccount';
import { SidebarFilters } from 'components/buyer/shop/SidebarFilters';
import { SearchListingCard } from 'components/buyer/shop/cards/SearchListingCard';
import { VendorAccount } from 'components/vendor/account/VendorAccount';
import { FaEdit } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { Button } from 'ui-lib';

export default function ShipaamAccountPage({
  params
}: {
  params: { subdomain: string };
}) {
  return params.subdomain === 'buyer' ? (
    <BuyerAccount />
  ) : params.subdomain === 'vendor' ? (
    <VendorAccount />
  ) : (
    <></>
  );
}
