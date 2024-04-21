'use client';

import {
  Box,
  Flex,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react';

export const EditAccountDetail = ({
  data
}: {
  data: {
    label?: string;
    text: string;
    custom_actions?: string;
  };
}) => {
  const modal = useDisclosure();
  return (
    <>
      <VStack alignItems={'flex-start'}>
        <Text color="#9DA1A7">{data?.label || '--'}</Text>
        <VStack
          alignItems={'flex-start'}
          boxShadow="0px 0.8px 3.2px 0px #00000008"
          border="1px solid #5656561F"
          borderRadius="6.4px 0px 0px 0px"
          p="1.7rem"
          w="max-content"
        >
          <Text maxW="35.2rem">{data?.text}</Text>
          {
            <HStack
              color={'var(--shipam-primary-red)'}
              gap="1rem"
              onClick={modal.onOpen}
              cursor={'pointer'}
            >
              {data?.custom_actions ? (
                <Text>{data?.custom_actions}</Text>
              ) : (
                <>
                  <Text cursor={'pointer'}>Edit</Text>
                  <Box
                    as="span"
                    bg="grey"
                    h=".4rem"
                    w=".4rem"
                    borderRadius="50%"
                  ></Box>
                  <Text cursor={'pointer'}>Delete</Text>
                </>
              )}
            </HStack>
          }
        </VStack>
      </VStack>
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        isCentered
        size={'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Heading>Edit Details</Heading>
          </ModalHeader>
          <ModalBody h="50rem">
            <Text>Edit your details</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
