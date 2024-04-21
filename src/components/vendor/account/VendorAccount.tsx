import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { Button } from 'ui-lib';
import { EditAccountDetail } from './EditAccountDetail';
import { useState } from 'react';

export const VendorAccount = ({ orders = [] }) => {
  const account_info = [
    {
      label: 'Password',
      text: '********',
      custom_actions: 'Change Password'
    },
    {
      label: 'Business Name',
      text: 'Techtrend Emporium'
    },
    {
      label: 'Company Description',
      text: 'Your go-to destination for cutting-edge e-commerce, offering a curated selection of innovative tech products for the modern consumer'
    }
  ];
  return (
    <Box
      bg="#fff"
      minH={'50vh'}
      w="100%"
      maxW={'100rem'}
      p="2.1rem"
      boxShadow="0px 0.8px 3.2px 0px #00000008"
      border="1px solid #5656561F"
    >
      <Heading>Vendor Info</Heading>
      <HStack gap="2rem" p="1.6rem 0rem">
        <Avatar name="Michael Jackson" size="xl" />
        <VStack alignItems={'flex-start'} gap=".4rem">
          <HStack justify={'space-between'} w="100%">
            <Text color="#212529">Mike Jack</Text>
            <Text
              color="var(--shipam-primary-red)"
              cursor="pointer"
              fontWeight={'500'}
            >
              Bank Account Details
            </Text>
          </HStack>
          <Flex alignItems={'flex-end'} gap="1.6rem">
            <Text color="#565656">
              Email: mikejack@example.com, Phone: +2348021233=45678
            </Text>
            <Center
              as="span"
              fontSize={'2.4rem'}
              color="var(--shipam-primary-red)"
            >
              <FiEdit />
            </Center>
          </Flex>
        </VStack>

        <EditAccountDetail
          data={{
            label: 'Address',
            text: '3601 Old Capitol Trail, Unit A-7, Suite'
          }}
        />
      </HStack>
      <Divider />
      <HStack gap="3rem" p="1.6rem 0rem" flexWrap={'wrap'}>
        {account_info.map((el, i) => (
          <EditAccountDetail key={i} data={el} />
        ))}
      </HStack>
      <Divider />
      <Heading>Receipts</Heading>
      <Center minH={'40vh'}>
        {orders.length <= 0 ? (
          <Text color="var(--shipam-primary-red)" fontWeight="500">
            No Transactions
          </Text>
        ) : (
          <></>
        )}
      </Center>
    </Box>
  );
};
