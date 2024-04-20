import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { IoArrowForward } from 'react-icons/io5';
import { Button } from 'ui-lib';

export const SummerSaleDIscount = ({ height = '24.7rem' }) => {
  return (
    <Flex
      borderRadius={'20px'}
      bgImage={'/images/misc/discount_banner.jpeg'}
      bgPos={'center'}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      h={height || '24.7rem'}
      w="100%"
      justify={'flex-end'}
      align={'center'}
      color="#ffffff"
      position={'relative'}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      p={{ base: '2rem', md: '1rem 5rem' }}
      my="4rem"
    >
      <VStack alignItems={'flex-start'} w="28.2rem" gap={'1.3rem'}>
        <Text textTransform={'uppercase'} fontWeight={'500'}>
          Summer Sale
        </Text>
        <Text fontSize={'3.2rem'} fontWeight={'600'}>
          <span style={{ color: 'var(--shipam-primary-red)' }}>37%</span> OFF
        </Text>
        <Text lineHeight={'2.1rem'} fontSize={'1.4rem'} opacity={'.7'}>
          Free on all your order, Free Shipping and 30 days money-back guarantee
        </Text>
        <Button borderRadius={'4.3rem'}>
          <Flex gap="1rem" align="center">
            Shop Now
            <IoArrowForward />
          </Flex>{' '}
        </Button>
      </VStack>
    </Flex>
  );
};
