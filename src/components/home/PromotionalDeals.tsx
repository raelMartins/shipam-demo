import { Center, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export const PromotionalDeals = () => {
  return (
    <Flex gap={'2.7rem'}>
      <Center
        position={'relative'}
        flex={'1'}
        aspectRatio={'480 / 607'}
        w="100%"
      >
        <Image
          src="/images/home/shipam_home_promo_demo_4.png"
          alt=""
          objectFit="cover"
          fill
        />
      </Center>
      <Center
        position={'relative'}
        flex={'1'}
        aspectRatio={'480 / 607'}
        w="100%"
      >
        <Image
          src="/images/home/shipam_home_promo_demo_5.png"
          alt=""
          objectFit="cover"
          fill
        />
      </Center>
      <Center
        position={'relative'}
        flex={'1'}
        aspectRatio={'480 / 607'}
        w="100%"
      >
        <Image
          src="/images/home/shipam_home_promo_demo_6.png"
          alt=""
          objectFit="cover"
          fill
        />
      </Center>
    </Flex>
  );
};
