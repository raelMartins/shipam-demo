import {
  Box,
  Card,
  CardBody,
  Center,
  Grid,
  Text,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';

export const RelatedProducts = () => {
  return (
    <Box
      p="2rem 2.8rem"
      bg="#FFFFFF"
      borderRadius={'.4rem'}
      border=".1rem solid #DEE2E7"
    >
      <Text
        mb="1.5rem"
        fontSize={'2rem'}
        lineHeight={'2.8rem'}
        fontWeight={'600'}
      >
        Related Products
      </Text>
      <Grid templateColumns={'repeat(6, 1fr)'}>
        {Array(6)
          .fill('')
          .map((el, i) => (
            <Card boxShadow={'none'} border="none" key={i}>
              <Center
                w="22rem"
                h="17rem"
                position={'relative'}
                borderRadius={'.1rem'}
                border=".1rem solid #e0e0e0"
                p="1rem"
              >
                <Image
                  src={`/images/placeholders/product/product_image_${Math.ceil(
                    Math.random() * 6
                  )}.svg`}
                  alt="Product Image"
                  fill
                  objectFit="contain"
                />
              </Center>
              <CardBody p="1rem 0rem">
                <VStack alignItems={'flex-start'} gap={'1rem'}>
                  <Text color="#505050" lineHeight={'2rem'}>
                    Xiaomi Redmi 8 Original
                  </Text>
                  <Text color="#8B96A5" lineHeight={'2rem'}>
                    $32.00 - $40.00
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
      </Grid>
    </Box>
  );
};
