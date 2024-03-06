import { Center, Flex, Image } from '@chakra-ui/react';
import { AuthForm } from 'components/auth/AuthForm';

export default function LoginPage({}) {
  return (
    <Flex align="center" justify="center" gap={'10rem'}>
      <Center maxW="85.3rem" aspectRatio={'853 / 695'}>
        <Image src="/images/auth/login_image.jpg" alt="Login Image" />
      </Center>
      <AuthForm type="sign_in" />
    </Flex>
  );
}
