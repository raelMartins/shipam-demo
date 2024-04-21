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

export const VendorDashboard = ({ orders = [] }) => {
  return (
    <Box
      minH={'50vh'}
      w="100%"
      maxW={'100rem'}
      p="2.1rem"
      boxShadow="0px 0.8px 3.2px 0px #00000008"
      border="1px solid #5656561F"
    >
      <HStack>
        <Box bg="#fff">
          <Text>Total Spending</Text>
        </Box>
      </HStack>
    </Box>
  );
};