import { Box, Flex, VStack } from '@chakra-ui/react';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { PrimaryFooter } from 'layouts/footers/PrimaryFooter';
import { SubscribeToNewsletter } from 'layouts/footers/SubscribeToNewsletter';
import { LoggedInNavbar } from 'layouts/navbars/LoggedInNavbar';
import { Navigation } from 'layouts/navbars/Navigation';
import { Navbar } from 'layouts/navbars/Navbar';
import { SidebarNav } from 'layouts/sidebars/SidebarNav';
import { SavedForLater } from 'components/buyer/shop/promotions/SavedForLater';

export default function CartLayout({
  children, // will be a page or nested layout
  params
}: {
  children: React.ReactNode;
  params: { subdomain: string };
}) {
  return (
    <Flex minH={'100vh'} direction="column">
      <Navbar user_type={params.subdomain} />
      <Flex
        direction={'column'}
        flex={'1'}
        bg="#F8F9FA"
        padding={{ base: '2rem 1rem' }}
      >
        <Box maxWidth={'148.4rem'} width={'100%'} margin="0rem auto">
          <Navigation />
          <VStack alignItems={'flex-start'} maxW="119rem" w="100%">
            <Flex mb="10rem" gap="5rem" w="100%">
              <SidebarNav subdomain={params.subdomain} />
              {children}
            </Flex>
            <SavedForLater />
          </VStack>
        </Box>
      </Flex>
      <SubscribeToNewsletter />
      <PrimaryFooter />
      <BasicFooter />
    </Flex>
  );
}
