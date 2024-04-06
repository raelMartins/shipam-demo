import {
  Box,
  Center,
  Flex,
  Grid,
  Image as ChakraImage
} from '@chakra-ui/react';
import Image from 'next/image';

export const HomePromotions = () => {
  return (
    <Grid gridTemplateColumns="1044fr 423fr" gap="2.4rem" w="100%" my="6.4rem">
      <Center
        position={'relative'}
        aspectRatio={'104.4 / 60'}
        cursor={'pointer'}
      >
        <Image
          src="/images/home/shipam_home_promo_demo_1.png"
          alt=""
          objectFit="cover"
          fill
          // style={{_hover: {display: 'none'}}}
        />
      </Center>
      <Flex flexDir={'column'} gap="2.4rem">
        <Center position={'relative'} flex="1" cursor={'pointer'}>
          <Image
            src="/images/home/shipam_home_promo_demo_2.png"
            alt=""
            objectFit="cover"
            fill
          />
        </Center>
        <Center position={'relative'} flex="1" cursor={'pointer'}>
          <Image
            src="/images/home/shipam_home_promo_demo_3.png"
            alt=""
            objectFit="cover"
            fill
          />
        </Center>
      </Flex>
    </Grid>
  );
};
