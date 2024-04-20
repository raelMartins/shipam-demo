import { Button as ChakraButton, Spinner } from '@chakra-ui/react';

export const Button = ({ isLoading = false, ...rest }) => {
  return (
    <ChakraButton
      {...rest}
      bg={
        rest.bg ||
        rest.backgroundColor ||
        rest.background ||
        'var(--shipam-primary-red)'
      }
      color={rest.color || '#ffffff'}
      opacity={'.95'}
      isDisabled={rest.disabled || rest.isDisabled || isLoading}
      _disabled={{ opacity: '.4', cursor: 'not-allowed' }}
      _hover={{ opacity: '1' }}
      _active={{ opacity: '1' }}
      _focus={{ opacity: '1' }}
      _focusVisible={{ opacity: '1' }}
    >
      {isLoading ? <Spinner /> : rest.children}
    </ChakraButton>
  );
  0;
};
