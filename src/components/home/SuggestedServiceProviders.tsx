import { Box, Grid, HStack, Heading, Text } from '@chakra-ui/react';
import { ServiceProviderCard } from 'components/service_provider/ServiceProviderCard';
import { GridProductCard } from 'components/shop/cards/GridProductCard';
import { VendorCard } from 'components/vendor/VendorCard';
import Link from 'next/link';
import { BsForward } from 'react-icons/bs';
import { IoMdArrowForward } from 'react-icons/io';

export const SuggestedServiceProviders = () => {
  return (
    <Box my="6rem">
      <HStack justify={'space-between'} my="1rem">
        <Heading
          color="#1a1a1a"
          fontSize="3.2rem"
          fontWeight="600"
          lineHeight={'3.8rem'}
        >
          Reach out to a particular service provider for a service
        </Heading>
        <HStack gap="1rem" color="var(--shipam-primary-red)">
          <Text fontWeight="500">View all</Text>
          <IoMdArrowForward />
        </HStack>
      </HStack>
      <Grid templateColumns={'repeat(5, 1fr)'} gap="4.3rem">
        {Array(10)
          .fill('')
          .map((el, i) => (
            <ServiceProviderCard data={{}} key={i} />
          ))}
      </Grid>
    </Box>
  );
};
