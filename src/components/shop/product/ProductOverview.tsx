import {
  Badge,
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack
} from '@chakra-ui/react';
import { StarRatings } from 'components/widgets/widgets';
import Image from 'next/image';
import { SupplierCard } from '../cards/SupplierCard';

export const ProductOverview = () => {
  return (
    <Flex
      p="2rem 2.8rem 4.4rem"
      bg="#FFFFFF"
      borderRadius={'.4rem'}
      border=".1rem solid #DEE2E7"
      gap={'3rem'}
    >
      <VStack gap={'1rem'}>
        <Center
          w="47.8rem"
          h="38rem"
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
        <Grid w="100%" templateColumns={'repeat(6, 1fr)'} gap={'1rem'}>
          {Array(6)
            .fill('')
            .map((el, i) => (
              <Center
                w="7rem"
                h="5.6rem"
                position={'relative'}
                borderRadius={'.1rem'}
                border=".1rem solid #e0e0e0"
                p="1rem"
                key={i}
                _hover={{ border: '.2rem solid #e0e0e0' }}
                cursor={'pointer'}
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
            ))}
        </Grid>
      </VStack>
      <VStack alignItems={'flex-start'}>
        <Flex gap={'1rem'}>
          <Text color="#00B517">In Stock</Text>
          <Badge
            bg={'#E0E0E0'}
            borderRadius={'3rem'}
            p=".5rem 1rem"
            fontSize={'1rem'}
            color="#5B5B5B"
            fontWeight={'400'}
            textTransform={'capitalize'}
          >
            B2C Product
          </Badge>
        </Flex>
        <Heading fontSize={'2rem'} lineHeight={'2.8rem'} my="1rem">
          Green Apple
        </Heading>
        <Flex align={'center'} gap={'1rem'}>
          <StarRatings rating={4} />
          <Text color={'#FF9017'}>8.7</Text>
        </Flex>
        <Grid
          bg="#FFF0DF"
          border=".1rem solid #BDC1C8"
          borderRadius={'.4rem'}
          templateColumns={'repeat(4, 1fr)'}
          p="1rem"
        >
          <VStack
            alignItems="flex-start"
            px="2rem"
            borderRight={'.1rem solid #BDC1C8'}
          >
            <Text
              fontSize={'1.8rem'}
              lineHeight={'2.2rem'}
              fontWeight={'600'}
              color="var(--shipam-primary-red)"
            >
              $118.00
            </Text>
            <Text fontSize={'1.3rem'} color="#606060">
              1 pc
            </Text>
          </VStack>
          <VStack
            alignItems="flex-start"
            px="2rem"
            borderRight={'.1rem solid #BDC1C8'}
          >
            <Text fontSize={'1.8rem'} lineHeight={'2.2rem'} fontWeight={'600'}>
              $98.00
            </Text>
            <Text fontSize={'1.3rem'} color="#606060">
              50 - 100 pcs
            </Text>
          </VStack>
          <VStack
            alignItems="flex-start"
            px="2rem"
            borderRight={'.1rem solid #BDC1C8'}
          >
            <Text fontSize={'1.8rem'} lineHeight={'2.2rem'} fontWeight={'600'}>
              $90.00
            </Text>
            <Text fontSize={'1.3rem'} color="#606060">
              100 - 700 pcs
            </Text>
          </VStack>
          <VStack alignItems="flex-start" px="2rem">
            <Text fontSize={'1.8rem'} lineHeight={'2.2rem'} fontWeight={'600'}>
              $78.00
            </Text>
            <Text fontSize={'1.3rem'} color="#606060">
              700+ pcs
            </Text>
          </VStack>
        </Grid>
        <HStack w="100%" p="1rem 0rem">
          <Text flex={'2'} color="#8B96A5">
            Price:
          </Text>
          <Text flex={'2'} color="#505050">
            Negotiable
          </Text>
          <Text flex={'1'} color="#8B96A5">
            Price/Carton:
          </Text>
          <Text
            flex={'2'}
            color="#1c1c1c"
            fontWeight={'600'}
            textAlign={'right'}
          >
            $90.00
          </Text>
        </HStack>
        <Divider border={'.1rem solid #E0E0E0'} />
        <HStack w="100%" p="1rem 0rem">
          <Text flex={'2'} color="#8B96A5">
            Type:
          </Text>
          <Text flex={'5'} color="#505050">
            Classic
          </Text>
        </HStack>
        <HStack w="100%" p="1rem 0rem">
          <Text flex={'2'} color="#8B96A5">
            Material:
          </Text>
          <Text flex={'5'} color="#505050">
            Plastic Material
          </Text>
        </HStack>
        <HStack w="100%" p="1rem 0rem">
          <Text flex={'2'} color="#8B96A5">
            Design:
          </Text>
          <Text flex={'5'} color="#505050">
            Modern Nice
          </Text>
        </HStack>
        <Divider border={'.1rem solid #E0E0E0'} />
        <HStack w="100%" p="1rem 0rem">
          <Text flex={'2'} color="#8B96A5">
            Customization:
          </Text>
          <Text flex={'5'} color="#505050">
            <Box as="p" maxW="20rem">
              Customized logo and design custom packages
            </Box>
          </Text>
        </HStack>
        <HStack w="100%" p="1rem 0rem">
          <Text flex={'2'} color="#8B96A5">
            Protection:
          </Text>
          <Text flex={'5'} color="#505050">
            Refund Policy
          </Text>
        </HStack>
        <HStack w="100%" p="1rem 0rem">
          <Text flex={'2'} color="#8B96A5">
            Warranty:
          </Text>
          <Text flex={'5'} color="#505050">
            2 years Full Warranty
          </Text>
        </HStack>
        <Divider border={'.1rem solid #E0E0E0'} />
      </VStack>
      <SupplierCard />
    </Flex>
  );
};
