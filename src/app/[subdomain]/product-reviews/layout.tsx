import { Box, Flex } from '@chakra-ui/react';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { PrimaryFooter } from 'layouts/footers/PrimaryFooter';
import { SubscribeToNewsletter } from 'layouts/footers/SubscribeToNewsletter';
import { LoggedInNavbar } from 'layouts/navbars/LoggedInNavbar';
import { Navigation } from 'layouts/navbars/Navigation';
import { Navbar } from 'layouts/navbars/Navbar';
import { SidebarNav } from 'layouts/sidebars/SidebarNav';

export default function ShopLayout({
  children // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex minH={'100vh'} direction="column">
      <Navbar user_type="buyer" />
      <Flex
        direction={'column'}
        flex={'1'}
        bg="#F8F9FA"
        padding={{ base: '2rem 1rem' }}
      >
        <Box maxWidth={'148.4rem'} width={'100%'} margin="0rem auto">
          <Navigation />

          <SidebarNav />
          {children}
        </Box>
      </Flex>
      <SubscribeToNewsletter />
      <PrimaryFooter />
      <BasicFooter />
    </Flex>
  );
}
