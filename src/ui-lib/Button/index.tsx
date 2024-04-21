import { Button as ChakraButton, Spinner } from '@chakra-ui/react';

export const Button = ({ isLoading = false, ...rest }) => {
  return (
    <ChakraButton
      bg={
        rest.bg ||
        rest.backgroundColor ||
        rest.background ||
        'var(--shipam-primary-red)'
      }
      color={rest.color || '#ffffff'}
      fontSize={rest.fontSize || '1.6rem'}
      py={rest.py || '2rem'}
      px={rest.px || '2rem'}
      fontWeight={'400'}
      opacity={'.95'}
      isDisabled={rest.disabled || rest.isDisabled || isLoading}
      _hover={{ opacity: '1' }}
      _active={{ opacity: '1' }}
      _focus={{ opacity: '1' }}
      _focusVisible={{ opacity: '1' }}
      _disabled={{ opacity: '.4', cursor: 'not-allowed' }}
      {...rest}
    >
      {isLoading ? <Spinner /> : rest.children}
    </ChakraButton>
  );
  0;
};
