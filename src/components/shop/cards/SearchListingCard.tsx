import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import { StarRatings } from 'components/widgets/widgets';
import Image from 'next/image';
import { AddToWishlistButton } from './AddToWishlistButton';

export const SearchListingCard = ({
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
      </Box>
      <Center w="28rem" h="21rem" position={'relative'}>
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

      <Stack flex={'1'}>
        <CardBody>
          <Heading
            fontWeight={'500'}
            fontSize={'1.6rem'}
            lineHeight={'2.2rem'}
            mb="2rem"
          >
            {product_details?.name || 'Unknown Product'}
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
                5
              }
            />
            <Text color={'#FF9017'}>{product_details?.rating}</Text>
          </Flex>

          {product_details?.description && (
            <Text py="2" lineHeight={'2.4rem'} noOfLines={3}>
              {product_details?.description}
            </Text>
          )}
          <Link
            href={`/shop/${category}/${product_details?.slug}`}
            color="var(--shipam-primary-red)"
            lineHeight={'2rem'}
            fontWeight={'500'}
          >
            View details
          </Link>
        </CardBody>

        {/* <CardFooter>
          <Button variant="solid" colorScheme="red">
            Buy Latte
          </Button>
        </CardFooter> */}
      </Stack>
    </Card>
  );
};
