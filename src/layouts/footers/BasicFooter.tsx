import { Box, Flex } from '@chakra-ui/react';

export const BasicFooter = () => {
  return (
    <Box
      bg="#343434"
      p={'3.6rem 1rem'}
      w={'full'}
      h="max-content"
      color={'#fff'}
    >
      <Flex
        w={{ base: '90%', md: '80%' }}
        m={'0px auto'}
        justify={'space-between'}
      >
        &copy; {new Date(Date.now()).getFullYear()} Shipam
      </Flex>
    </Box>
  );
};
