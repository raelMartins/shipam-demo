import { Box, Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import { SidebarFilters } from 'components/buyer/shop/SidebarFilters';
import { SearchListingCard } from 'components/buyer/shop/cards/SearchListingCard';
import { CreateProductForm } from 'components/vendor/product/CreateProductForm';

export default function AddProductPage({}) {
  return (
    <Flex
      gap={'2rem'}
      direction="column"
      border=".1rem solid #CACACA"
      borderRadius={'1rem'}
      p={{ base: '2rem', md: '6rem' }}
      bg={'#fff'}
    >
      <Heading>Add new product</Heading>
      <Divider width="67%" />
      <CreateProductForm />
    </Flex>
  );
}
