import { Box, Flex, VStack } from '@chakra-ui/react';
import { SidebarFilters } from 'components/shop/SidebarFilters';
import { SearchListingCard } from 'components/shop/cards/SearchListingCard';

export default function ShipamMarketPage({}) {
  return (
    <Flex gap={'2rem'}>
      <SidebarFilters />
      <Box flex={'1'}>
        <VStack gap={'1rem'}>
          {Array(10)
            .fill('')
            .map((el: string, i: number) => (
              <SearchListingCard key={i} />
            ))}
        </VStack>
      </Box>
    </Flex>
  );
}
