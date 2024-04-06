import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react';
import { SidebarFilters } from 'components/shop/SidebarFilters';
import { SearchListingCard } from 'components/shop/cards/SearchListingCard';
import {
  get_all_categories,
  get_one_category
} from 'utils/api_calls/categories_api_calls';
import {
  get_all_products,
  get_products_by_category
} from 'utils/api_calls/product_api_calls';

export default async function ShipamMarketPage({
  params,
  searchParams
}: {
  params: { category: string };
  searchParams: any;
}) {
  const categories = await get_all_categories();
  const category = await get_one_category({ slug: params.category });
  const res = await get_products_by_category({
    product_category: category.id
  });
  console.log(res);
  const products = res.data;

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
              <Text textTransform={'capitalize'}>
                No products in this category
              </Text>
            </Center>
          ) : (
            products.map((el: any, i: number) => (
              <SearchListingCard key={i} data={el} category={params.category} />
            ))
          )}
        </VStack>
      </Box>
    </Flex>
  );
}
