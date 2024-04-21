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

export const BuyerDashboard = ({ orders = [] }) => {
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
      <Heading>Buyer Dashboard</Heading>
    </Box>
  );
};
