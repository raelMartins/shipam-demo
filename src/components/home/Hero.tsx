import { Box, Center, Text } from '@chakra-ui/react';
import { ProductCategory } from 'utils/types/general_types';
import { HomeCategories } from './HomeCategories';
import { HomeNavbar } from 'layouts/navbars/HomeNavbar';

export const HomeHero = ({ categories }: { categories: ProductCategory[] }) => {
  return (
    <Box
      position="relative"
      bgImage={'/images/home/shipam_home_page_background.jpeg'}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      bgPosition="center"
      minH={'80rem'}
    >
      <Box
        pos={'absolute'}
        w="100%"
        h="100%"
        background="linear-gradient(93.61deg, rgba(239, 235, 224, 0.7) 81.89%, rgba(145, 147, 150, 0.7) 104.52%)"
      >
        <HomeNavbar />
        <Center mt="10rem" flexDirection={'column'} gap="3rem">
          <HomeCategories categories={categories} />
          <Text
            fontSize={'5.8rem'}
            lineHeight={'7rem'}
            textAlign="center"
            fontWeight={'600'}
            maxWidth="117rem"
          >
            Welcome to Shipam; where we bridge borders and grow exponentially
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
