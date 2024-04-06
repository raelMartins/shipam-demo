import {
  Textarea as ChakraTextarea,
  FormLabel,
  VStack
} from '@chakra-ui/react';
import { FormErrorWrapper } from 'components/forms/FormErrorWrapper';

export const Textarea = ({ label, labelStyle = {}, ...rest }: any) => {
  return (
    <VStack alignItems={'flex-start'} spacing={'0rem'} w="100%">
      {label && (
        <FormLabel
          fontSize={'1.6rem'}
          lineHeight={'2.2rem'}
          m="none"
          textAlign={'left'}
          color="#5656561"
          style={labelStyle}
        >
          {label}
        </FormLabel>
      )}
      <FormErrorWrapper
        ChildComponent={ChakraTextarea}
        bg="#F9F9F9"
        borderRadius=".64rem"
        padding="1.6rem"
        fontSize="1.4rem"
        border=".1rem solid #DEE2E6"
        w="100%"
        {...rest}
      />
    </VStack>
  );
};
