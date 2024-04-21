import { Box, Flex, VStack } from '@chakra-ui/react';
import { BuyerDashboard } from 'components/buyer/dashboard/BuyerDashbord';
import { SidebarFilters } from 'components/buyer/shop/SidebarFilters';
import { SearchListingCard } from 'components/buyer/shop/cards/SearchListingCard';
import { VendorDashboard } from 'components/vendor/dashboard/VendorDashboard';

export default function DashboardPage({
  params
}: {
  params: { subdomain: string };
}) {
  return params.subdomain === 'buyer' ? (
    <BuyerDashboard />
  ) : params.subdomain === 'vendor' ? (
    <VendorDashboard />
  ) : (
    <></>
  );
}
