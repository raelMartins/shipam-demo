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

export const BuyerAccount = ({ orders = [] }) => {
  const account_info = [
    {
      label: 'Password',
      text: '********',
      custom_actions: 'Change Password'
    },
    {
      label: 'Billing Address',
      text: '3601 Old Capitol Trail, Unit A-7, Suite'
    },
    {
      label: 'Shipping Address',
      text: 'Moscow city, Street name, House 77'
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
      <Heading>Personal Info</Heading>
      <HStack gap="2rem" p="1.6rem 0rem">
        <Avatar name="John Doe" size="xl" />
        <VStack alignItems={'flex-start'} gap=".4rem">
          <Text color="#212529">John Doe</Text>
          <Flex alignItems={'flex-end'} gap="1.6rem">
            <Text color="#565656">
              Email: johndoe@example.com, Phone: +2348021233=45678
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

        <Button variant="outline">Bank Account Details</Button>
      </HStack>
      <Divider />
      <HStack gap="3rem" p="1.6rem 0rem" flexWrap={'wrap'}>
        {account_info.map((el, i) => (
          <EditAccountDetail key={i} data={el} />
        ))}
      </HStack>
      <HStack gap="3rem" justifyContent="flex-end" my="2rem">
        <Button variant="outline">View Payment Method</Button>
        <Button variant="outline">Add new Address</Button>
      </HStack>
      <Divider />
      <Heading>My Recent Orders</Heading>
      <Center minH={'40vh'}>
        {orders.length <= 0 ? (
          <Text color="var(--shipam-primary-red)" fontWeight="500">
            No Orders
          </Text>
        ) : (
          <></>
        )}
      </Center>
    </Box>
  );
};
