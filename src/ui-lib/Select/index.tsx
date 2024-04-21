import { Select as ChakraSelect, FormLabel, VStack } from '@chakra-ui/react';
import { FormErrorWrapper } from 'components/forms/FormErrorWrapper';

export const Select = ({
  label,
  labelStyle = {},
  selectStyle = {},
  children,
  ...rest
}: any) => {
  return (
    <VStack
      alignItems={'flex-start'}
      spacing={'0rem'}
      w={rest.w || rest.width || '100%'}
    >
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
      <select
        style={{
          backgroundColor: '#F9F9F9',
          borderRadius: '.64rem',
          padding: '.68rem',
          border: '.1rem solid #DEE2E6',
          width: '100%',
          margin: '0rem',
          fontSize: '1.4rem',
          outline: 'none',
          cursor: 'pointer',
          ...selectStyle
        }}
        {...rest}
      >
        {' '}
        {children}
      </select>
      {/* <FormErrorWrapper
        ChildComponent={ChakraSelect}
        bg="#F9F9F9"
        borderRadius=".64rem"
        // padding="1.6rem"
        border=".1rem solid #DEE2E6"
        size="lg"
        w="100%"
        m="0rem"
        minhH="40rem"
        lineHeight="200%"
        // variant="unstyled"
        {...rest}
      >
        {children}
      </FormErrorWrapper> */}
    </VStack>
  );
};
