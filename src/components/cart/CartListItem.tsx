import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { AddToWishlistButton } from 'components/shop/cards/AddToWishlistButton';
import { StarRatings } from 'components/widgets/widgets';
import Image from 'next/image';
import { QuantityMenu } from './QuantityMenu';
import { Button } from 'ui-lib';

export const CartListItem = ({
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

  return (
    <Card
      bg="#fff"
      // border=".1rem solid #DEE2E7"
      border={'none'}
      borderBottom=".1rem solid #DEE2E7"
      p="1rem"
      // borderRadius={'.4rem'}
      w="100%"
      boxShadow={'none'}
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
    >
      {/* <Box
        as="span"
        pos={'absolute'}
        top={'1rem'}
        right={'2rem'}
        p="1rem 2rem"
        boxShadow={'0rem .1rem .2rem 0rem #38383814'}
        border={'.1rem solid #DEE2E7'}
        borderRadius={'.4rem'}
        cursor={'pointer'}
      >
        <AddToWishlistButton
          style={{
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'var(--shipam-primary-red)'
          }}
        />
      </Box> */}
      <Center
        w="10.9rem"
        h="8rem"
        position={'relative'}
        border=".1rem solid #E0E0E0"
        borderRadius={'.6rem'}
      >
        <Image
          // src={product_details?.image_url}
          src={
            product_details?.images?.find((el: any) => el.is_featured == '1')
              ?.image || `/images/placeholders/product/no_product.jpeg`
          }
          alt="Product Image"
          fill
          objectFit="contain"
        />
      </Center>
      <CardBody flex={'1'} display="flex" flexDirection="column" gap={'1rem'}>
        <HStack
          color={'#1C1C1C'}
          justifyContent={'space-between'}
          alignItems={'center'}
          fontWeight={'500'}
          fontSize={'1.6rem'}
          lineHeight={'2.2rem'}
        >
          <Text>{product_details?.name || 'Unknown Product'}</Text>
          <Text>
            $
            {Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            }).format(product_details?.price || 0)}
          </Text>
        </HStack>
        <HStack justifyContent={'space-between'} gap="2rem">
          <VStack alignItems={'flex-start'} color="#8B96A5">
            <Text>Size: medium, Color: blue, Material: Plastic</Text>
            <Text>Seller: Artel Market</Text>
          </VStack>
          <QuantityMenu />
        </HStack>
        <HStack gap={'1rem'} fontSize={'1.6rem'}>
          <Button
            fontSize={'1.3rem'}
            bg="#fff"
            color="#FA3434"
            border=".1rem solid #DEE2E7"
          >
            Remove
          </Button>
          <AddToWishlistButton>
            <Button
              fontSize={'1.3rem'}
              bg="#fff"
              color="#666666"
              border=".1rem solid #DEE2E7"
            >
              Save For Later
            </Button>
          </AddToWishlistButton>
        </HStack>
      </CardBody>
    </Card>
  );
};
