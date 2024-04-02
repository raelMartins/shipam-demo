import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react';
import { CartListItem } from 'components/cart/CartListItem';
import { SidebarFilters } from 'components/shop/SidebarFilters';
import { SearchListingCard } from 'components/shop/cards/SearchListingCard';

export default function ShipamMarketPage({}) {
  const cart = [{}, {}, {}];
  return (
    <Box
      flex="1"
      bg="#ffffff"
      border=".1rem solid #DEE2E7"
      borderRadius={'.6rem'}
      w="100%"
      p="2.5rem 3rem"
    >
      {cart.length <= 0 ? (
        <Center w="100%" h={'100%'}>
          <Text>No Items in your cart</Text>
        </Center>
      ) : (
        <VStack alignItems={'flex-start'} gap={'2rem'}>
          {cart.map((el: any, i: number) => (
            <CartListItem key={i} data={el} />
          ))}
        </VStack>
      )}
    </Box>
  );
}
