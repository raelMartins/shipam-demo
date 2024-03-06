import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({ ...rest }) => {
  return (
    <ChakraButton
      {...rest}
      opacity={'.95'}
      _disabled={{ opacity: '.4', cursor: 'not-allowed' }}
      _hover={{ opacity: '1' }}
    />
  );
};
