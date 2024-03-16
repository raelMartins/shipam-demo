import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { AddToWishlistButton } from './AddToWishlistButton';

export const SupplierCard = () => {
  return (
    <Card
      bg="#FFFFFF"
      borderRadius={'.4rem'}
      border=".1rem solid #DEE2E7"
      w="100%"
      p="2rem"
      boxShadow={'none'}
      color="#8B96A5"
    >
      <CardHeader color={'#1c1c1c'}>
        <HStack gap="1rem">
          <Center
            width={'4.8rem'}
            h="4.8rem"
            bg="#C6F3F1"
            fontSize={'2.4rem'}
            color="#4CA7A799"
            borderRadius={'.4rem'}
          >
            R
          </Center>
          <VStack alignItems={'flex-start'}>
            <Text>Supplier</Text>
            <Text>Guanjoi Trading LLC</Text>
          </VStack>
        </HStack>
      </CardHeader>
      <Divider border={'.1rem solid #E0E0E0'} />
      <CardBody>
        <HStack align="center" gap={'3rem'} py="1rem">
          <Image
            src="/images/placeholders/german_flag.svg"
            alt="Supplier Location"
          />
          <Text>Germany, Berlin</Text>
        </HStack>
        <HStack align="center" gap={'3rem'} py="1rem">
          <MdOutlineVerifiedUser fontSize={'2.2rem'} />
          <Text>Verified Seller</Text>
        </HStack>
        <HStack align="center" gap={'3rem'} py="1rem">
          <TbWorld fontSize={'2.2rem'} />
          <Text>Worldwide Shipping</Text>
        </HStack>
        <HStack
          align="center"
          gap={'3rem'}
          py="1rem"
          justifyContent={'space-between'}
        >
          <Text>Minimum Order Quantity:</Text>
          <Text color="#1c1c1c" fontWeight={'500'}>
            90
          </Text>
        </HStack>
        <HStack
          align="center"
          gap={'3rem'}
          py="1rem"
          justifyContent={'space-between'}
        >
          <Text>Quantity Available:</Text>
          <Text color="#1c1c1c" fontWeight={'500'}>
            1,900
          </Text>
        </HStack>
        <VStack gap="1rem">
          <Button
            bg="var(--shipam-primary-red)"
            color="#fff"
            borderRadius={'.6rem'}
            border=".1rem solid #DEE2E7"
            fontSize={'1.6rem'}
            w="100%"
            p="2rem"
          >
            Add to Cart
          </Button>
          <Button
            color="var(--shipam-primary-red)"
            bg="#fff"
            borderRadius={'.6rem'}
            border=".1rem solid #DEE2E7"
            fontSize={'1.6rem'}
            w="100%"
            p="2rem"
          >
            Buy In Bulk
          </Button>
          <Button
            bg="#fff"
            borderRadius={'.6rem'}
            border=".1rem solid #DEE2E7"
            color="var(--shipam-primary-red)"
            fontSize={'1.6rem'}
            w="100%"
            p="2rem"
          >
            Sellers Profile
          </Button>
        </VStack>
        <Flex
          cursor={'pointer'}
          color="var(--shipam-primary-red)"
          fontSize={'1.6rem'}
          my="3rem"
          fontWeight="600"
          align={'center'}
          gap="1rem"
          justifyContent={'center'}
        >
          <AddToWishlistButton style={{ fontSize: '2.4rem' }} />
          Save for Later
        </Flex>
      </CardBody>
    </Card>
  );
};
