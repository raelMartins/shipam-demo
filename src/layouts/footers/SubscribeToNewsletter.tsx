import {
  Button,
  Center,
  Input,
  InputGroup,
  Text,
  VStack
} from '@chakra-ui/react';

export const SubscribeToNewsletter = () => {
  return (
    <Center p="5rem" w={'full'} h="max-content" bg={'#EFF2F4'}>
      <VStack gap="2rem">
        <Text
          color={'#1c1c1c'}
          fontSize={'2rem'}
          fontWeight={'600'}
          lineHeight={'2.8rem'}
        >
          Subscribe on our newsletter
        </Text>
        <Text color={'#606060'} fontSize={'1.6rem'}>
          Get daily news on upcoming offers from many suppliers all over the
          world Email Subscribe
        </Text>
        <InputGroup maxW={'40rem'} mt="1rem">
          <Input
            type="text"
            placeholder="Email"
            bg="#fff"
            borderRadius={'2rem'}
            fontSize={'1.6rem'}
            padding={'2rem'}
            pr="12rem"
          />
          <Button
            bg="var(--shipam-primary-red)"
            color="#fff"
            borderRadius={'2rem'}
            fontSize={'1.6rem'}
            padding={'2rem'}
            position={'absolute'}
            right={'0rem'}
            top={'0rem'}
            bottom={'0rem'}
            _hover={{ backgroundColor: 'var(--shipam-primary-red)' }}
            zIndex={'1'}
          >
            Subscribe
          </Button>
        </InputGroup>
      </VStack>
    </Center>
  );
};
