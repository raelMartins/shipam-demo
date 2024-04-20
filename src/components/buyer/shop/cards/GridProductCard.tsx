import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { AddToWishlistButton } from './AddToWishlistButton';
import Image from 'next/image';
import { StarRatings } from 'components/widgets/widgets';
import { AddToCartButton } from './AddToCartButton';

export const GridProductCard = ({
  data,
  category
}: {
  data: any;
  category?: string;
}) => {
  const product_details = {
    rating: 0,
    best_possible_rating: 10,
    price: 0,
    old_price: 0,
    free_shipping: true,
    stock_size: 1,
    ...data
  };
  const image_url = `/images/placeholders/product/product_image_${Math.ceil(
    Math.random() * 32
  )}.svg`;

  return (
    <Card
      bg="#fff"
      border=".1rem solid #DEE2E7"
      p="1rem"
      borderRadius={'.4rem'}
      w="100%"
      boxShadow={'none'}
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
    >
      <Box
        as="span"
        p=".6rem"
        boxShadow={'0rem .1rem .2rem 0rem #38383814'}
        border={'.1rem solid #DEE2E7'}
        borderRadius={'50%'}
        cursor={'pointer'}
        bg="#fff"
        position={'absolute'}
        top={'1rem'}
        right={'1rem'}
        zIndex={'1'}
      >
        <AddToWishlistButton
          product_id={product_details.id}
          style={{
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#000'
          }}
        />
      </Box>
      <CardBody p="0rem">
        <Center
          // w="26rem"
          // h="24rem"
          aspectRatio={'26 / 24'}
          w="100%"
          position={'relative'}
        >
          <Image
            // src={product_details?.image_url}
            src={
              product_details?.images?.find((el: any) => el.is_featured == '1')
                ?.image ||
              image_url ||
              `/images/placeholders/product/no_product.jpeg`
            }
            alt="Product Image"
            fill
            objectFit="contain"
          />
        </Center>
        <Flex justify={'space-between'}>
          <Stack>
            <Heading
              fontWeight={'500'}
              fontSize={'1.6rem'}
              lineHeight={'2.2rem'}
            >
              {product_details?.name || 'Yeezys' || 'Unknown Product'}
            </Heading>
            <Text
              color={'#1C1C1C'}
              fontWeight={'600'}
              fontSize={'2rem'}
              lineHeight={'2.8rem'}
            >
              $
              {Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }).format(product_details?.price || 0)}
            </Text>
            <Flex align={'center'} gap={'1rem'}>
              <StarRatings
                rating={
                  (product_details?.rating /
                    product_details?.best_possible_rating) *
                    5 || 3.5
                }
              />
              <Text color={'#FF9017'}>{product_details?.rating || 7}</Text>
            </Flex>
          </Stack>
          <HStack gap="1rem" p=".4rem">
            <Box
              as="span"
              p=".6rem"
              boxShadow={'0rem .1rem .2rem 0rem #38383814'}
              border={'.1rem solid #DEE2E7'}
              borderRadius={'50%'}
              cursor={'pointer'}
              bg="#F2F2F2"
            >
              <AddToCartButton
                style={{
                  fontSize: '2rem',
                  cursor: 'pointer',
                  color: '#000'
                }}
              />
            </Box>
            {/* <Box
              as="span"
              p=".6rem"
              boxShadow={'0rem .1rem .2rem 0rem #38383814'}
              border={'.1rem solid #DEE2E7'}
              borderRadius={'50%'}
              cursor={'pointer'}
              bg="#F2F2F2"
            >
              <AddToWishlistButton
                style={{
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  color: '#000'
                }}
              />
            </Box> */}
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};
