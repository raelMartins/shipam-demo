import { Box, Flex } from '@chakra-ui/react';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { AuthNavbar } from 'layouts/navbars/AuthNavbar';

export default function AuthLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex minH={'100vh'} direction="column">
      <AuthNavbar type="buyer" />
      <Flex
        direction={'column'}
        flex={'1'}
        bg="#F8F9FA"
        padding={{ base: '2rem 1rem' }}
      >
        {children}
      </Flex>
      <BasicFooter />
    </Flex>
  );
}
