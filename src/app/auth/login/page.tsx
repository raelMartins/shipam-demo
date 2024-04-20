'use client';

import { Box, Center, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { AuthForm } from 'components/auth/AuthForm';
import { BsBoxSeam } from 'react-icons/bs';
import { ImCart } from 'react-icons/im';
import { LiaShippingFastSolid } from 'react-icons/lia';

export default function LoginPage({
  params
}: {
  params: { subdomain: string };
}) {
  const handle_signin = (signup_as: string) => {
    location.assign(
      `${location.protocol}//${signup_as}.${location.host}/auth/login`
    );
  };
  return (
    <Flex align="center" justify="center" gap={'10rem'}>
      <Center maxW="85.3rem" aspectRatio={'853 / 695'}>
        <Image src="/images/auth/login_image.jpg" alt="Login Image" />
      </Center>
      {/* <AuthForm auth_type="sign_in" user_type={params.subdomain} /> */}
      <Box
        p="2rem"
        bg="#FFFFFF"
        boxShadow="0px 2.4000000953674316px 8px 0px #0000001A"
        borderRadius={'1rem'}
        border=".1rem solid #5656561F"
      >
        <Text mb={'2rem'}>Sign In as</Text>
        <Grid templateColumns={'repeat(3, 1fr)'} gap={'1.8rem'}>
          <Center
            bg="#FEF2F2"
            borderRadius={'1.6rem'}
            aspectRatio={'1 / 1 '}
            width={'17rem'}
            gap={'1rem'}
            flexDir={'column'}
            onClick={() => handle_signin('buyer')}
            cursor={'pointer'}
            transform="scale(.95)"
            transition={'.3s'}
            _hover={{ transform: 'scale(1)' }}
          >
            <Center
              color={'var(--shipam-primary-red)'}
              h="4.2rem"
              w="4.2rem"
              fontSize={'2rem'}
              bg="var(--shipam-red-pale)"
              borderRadius={'50%'}
            >
              <ImCart />
            </Center>
            <Text>Bulk Buyer</Text>
          </Center>
          <Center
            bg="#FEF2F2"
            borderRadius={'1.6rem'}
            aspectRatio={'1 / 1 '}
            width={'17rem'}
            gap={'1rem'}
            flexDir={'column'}
            onClick={() => handle_signin('vendor')}
            cursor={'pointer'}
            transform="scale(.95)"
            transition={'.3s'}
            _hover={{ transform: 'scale(1)' }}
          >
            <Center
              color={'var(--shipam-primary-red)'}
              h="4.2rem"
              w="4.2rem"
              fontSize={'2rem'}
              bg="var(--shipam-red-pale)"
              borderRadius={'50%'}
            >
              <BsBoxSeam />
            </Center>
            <Text>Vendor</Text>
          </Center>

          <Center
            bg="#FEF2F2"
            borderRadius={'1.6rem'}
            aspectRatio={'1 / 1 '}
            width={'17rem'}
            gap={'1rem'}
            flexDir={'column'}
            cursor={'not-allowed'}
            transform="scale(.95)"
            transition={'.3s'}
            _hover={{ transform: 'scale(1)' }}
          >
            <Center
              color={'var(--shipam-primary-red)'}
              h="4.2rem"
              w="4.2rem"
              fontSize={'2rem'}
              bg="var(--shipam-red-pale)"
              borderRadius={'50%'}
            >
              <LiaShippingFastSolid />
            </Center>
            <Text>Service Provider</Text>
          </Center>
        </Grid>
      </Box>
    </Flex>
  );
}
