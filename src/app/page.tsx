import { Box, Center, Flex } from '@chakra-ui/react';
import styles from './page.module.scss';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { Navbar } from 'layouts/navbars/Navbar';
import { HomeHero } from 'components/home/Hero';
import { get_all_categories } from 'utils/api_calls/categories_api_calls';
import { HomePromotions } from 'components/home/HomePromotions';
import { PopularProducts } from 'components/home/PopularProducts';
import { HotDeals } from 'components/home/HotDeals';
import { SuggestedVendors } from 'components/home/SuggestedVendors';
import { SuggestedServiceProviders } from 'components/home/SuggestedServiceProviders';
import { SummerSaleDIscount } from 'components/shop/promotions/SummerSaleDIscount';
import { PromotionalDeals } from 'components/home/PromotionalDeals';
import { Button } from 'ui-lib';

export default async function Home() {
  const categories = await get_all_categories();

  return (
    <main className={styles.main}>
      <Flex minH={'100vh'} direction="column">
        <Flex
          direction={'column'}
          flex={'1'}
          bg="#F8F9FA"
          // padding={{ base: '2rem 1rem' }}
        >
          <HomeHero categories={categories} />
          <Box maxWidth="149rem" w="100%" mx="auto" p="1rem">
            <HomePromotions />
            <PopularProducts />
            <PromotionalDeals />
            <HotDeals />
            <SummerSaleDIscount height="35.8rem" />
            <SuggestedVendors />
            <SuggestedServiceProviders />
            <Center my="6rem">
              <Button
                fontSize="3.6rem"
                fontWeight="700"
                p="5rem 10rem"
                borderRadius="5rem"
              >
                Explore Shipam
              </Button>
            </Center>
          </Box>
        </Flex>
        <BasicFooter />
      </Flex>
    </main>
  );
}
