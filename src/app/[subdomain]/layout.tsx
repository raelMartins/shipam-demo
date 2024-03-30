import { Box, Flex } from '@chakra-ui/react';
import { getCookie } from 'cookies-next';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { PrimaryFooter } from 'layouts/footers/PrimaryFooter';
import { SubscribeToNewsletter } from 'layouts/footers/SubscribeToNewsletter';
import { Navbar } from 'layouts/navbars/Navbar';
import { Navigation } from 'layouts/navbars/Navigation';

export default function GeneralLayout({
  children, // will be a page or nested layout
  params
}: {
  children: React.ReactNode;
  params: { subdomain: string };
}) {
  return (
    <Flex minH={'100vh'} direction="column">
      {children}
      {/* <Navbar user_type={params.subdomain} />
      <Flex
        direction={'column'}
        flex={'1'}
        bg="#F8F9FA"
        padding={{ base: '2rem 1rem' }}
      >
        <Box maxWidth={'148.4rem'} width={'100%'} margin="0rem auto">
          <Navigation />

          {children}
        </Box>
      </Flex>
      <SubscribeToNewsletter />
      <PrimaryFooter />
      <BasicFooter /> */}
    </Flex>
  );
}
