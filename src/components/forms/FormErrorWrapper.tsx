import React from 'react';
import { FormControl, Text, SlideFade } from '@chakra-ui/react';

export const FormErrorWrapper = ({
  ChildComponent,
  error,
  border,
  ...rest
}: any) => {
  return (
    <FormControl>
      <ChildComponent
        {...rest}
        mb={0}
        isInvalid={error}
        _focus={{
          border: error ? '.1rem solid var(--shipam-primary-red)' : border
        }}
        _hover={{
          border: error ? '.1rem solid var(--shipam-primary-red)' : border
        }}
        _focusVisible={{
          border: error ? '.1rem solid var(--shipam-primary-red)' : border
        }}
      />
      <SlideFade in={error} offsetY="1rem">
        <Text
          color={'var(--shipam-primary-red)'}
          my={'.5rem'}
          fontSize={'1.4rem'}
          mb={rest.mb || rest.marginBottom || rest.my}
        >
          {error}
        </Text>
      </SlideFade>
    </FormControl>
  );
};
