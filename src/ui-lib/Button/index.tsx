import { Button as ChakraButton, Spinner } from '@chakra-ui/react';

export const Button = ({ variant = 'default', isLoading = false, ...rest }) => {
  return (
    <ChakraButton
      bg={
        rest.bg ||
        rest.backgroundColor ||
        rest.background ||
        (variant == 'outline' ? '#fff' : 'var(--shipam-primary-red)')
      }
      color={
        rest.color ||
        (variant == 'outline' ? 'var(--shipam-primary-red)' : '#ffffff')
      }
      fontSize={rest.fontSize || '1.6rem'}
      py={rest.py || '2rem'}
      px={rest.px || '2rem'}
      fontWeight={'400'}
      opacity={'.95'}
      border={rest.border || (variant == 'outline' ? '.1rem solid' : 'none')}
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
