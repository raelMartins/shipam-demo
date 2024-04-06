import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react';
import { SidebarFilters } from 'components/shop/SidebarFilters';
import { SearchListingCard } from 'components/shop/cards/SearchListingCard';
import { get_all_categories } from 'utils/api_calls/categories_api_calls';
import { get_all_products } from 'utils/api_calls/product_api_calls';

export default async function ShipamMarketPage({
  params,
  searchParams
}: {
  params: any;
  searchParams: any;
}) {
  const res = await get_all_products();
  const products = res.data;
  const categories = await get_all_categories();
  console.log(searchParams);

  return (
    <Flex gap={'2rem'}>
      <SidebarFilters categories={categories} />
      <Box flex={'1'}>
        <VStack gap={'1rem'}>
          {products.length <= 0 ? (
            <Center
              bg="#fff"
              border=".1rem solid #DEE2E7"
              p="1rem"
              borderRadius={'.4rem'}
              w="100%"
              h="30vh"
            >
              <Text textTransform={'capitalize'}>No products found</Text>
            </Center>
          ) : (
            products.map((el: any, i: number) => (
              <SearchListingCard
                key={i}
                data={el}
                category={
                  categories.find(
                    (category: any) => category.id === el.product_category_id
                  )?.slug || 'general'
                }
              />
            ))
          )}
        </VStack>
      </Box>
    </Flex>
  );
}
