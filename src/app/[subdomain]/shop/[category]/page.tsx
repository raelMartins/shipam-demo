import { Box, Flex, VStack } from '@chakra-ui/react';
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
          {products.map((el: any, i: number) => (
            <SearchListingCard key={i} data={el} category={params.category} />
          ))}
        </VStack>
      </Box>
    </Flex>
  );
}
