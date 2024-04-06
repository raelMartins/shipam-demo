'use client';

import { Box, Center, Flex, Grid, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ProductCategory } from 'utils/types/general_types';

export const HomeCategories = ({
  categories
}: {
  categories: ProductCategory[];
}) => {
  return (
    <Flex
      gap="2.9rem"
      maxW={'80%'}
      mx="auto"
      flexWrap="wrap"
      justify={'center'}
    >
      {categories.map((category, index) => (
        <Center
          as={Link}
          href={`${location.protocol}//buyer.${location.host}/shop/${category.slug}`}
          key={category.id}
          border="1px solid #FFFFFF"
          background="#FFFFFF4D"
          borderRadius={'1.5rem'}
          flexDir={'column'}
          flex={'1'}
          aspectRatio={'16 / 17.7'}
          textAlign={'center'}
          p="1rem"
          maxW={'11rem'}
          minW={'max-content'}
          cursor={'pointer'}
        >
          <Center
            position="relative"
            aspectRatio={'1 / 1'}
            w="11rem"
            h="11rem"
            flex={'1'}
          >
            <Image
              src={`/images/placeholders/categories/category-${
                (index % 8) + 1
              }.svg`}
              alt=""
              fill
              objectFit="contain"
            />
          </Center>
          <Text fontSize={'1.4rem'} lineHeight={'1.6rem'} fontWeight={'700'}>
            {category.name}
          </Text>
        </Center>
      ))}
    </Flex>
  );
};
