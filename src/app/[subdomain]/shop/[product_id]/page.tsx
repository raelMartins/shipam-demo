import { Box, Flex, VStack } from '@chakra-ui/react';
import { SidebarFilters } from 'components/shop/SidebarFilters';
import { SearchListingCard } from 'components/shop/cards/SearchListingCard';
import { ProductOverview } from 'components/shop/product/ProductOverview';
import { ProductTabs } from 'components/shop/product/ProductTabs';
import { RelatedProducts } from 'components/shop/promotions/RelatedProducts';
import { YouMayLikeSidebar } from 'components/shop/promotions/YouMayLikeSideBar';

export default function ShipamProductPage({}) {
  return (
    <Flex direction={'column'} gap={'2rem'}>
      <ProductOverview />
      <Flex gap="2rem">
        <Box
          flex="1"
          p="2rem 2.8rem 4.4rem"
          bg="#FFFFFF"
          borderRadius={'.4rem'}
          border=".1rem solid #DEE2E7"
          box-shadow="0px 1px 3px 0px #3838381A"
        >
          <ProductTabs />
        </Box>
        <YouMayLikeSidebar />
      </Flex>
      <RelatedProducts />
    </Flex>
  );
}
