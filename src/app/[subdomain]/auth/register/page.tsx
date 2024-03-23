import { Center, Flex, Image } from '@chakra-ui/react';
import { AuthForm } from 'components/auth/AuthForm';

export default function RegisterPage({
  params
}: {
  params: { subdomain: string };
}) {
  return (
    <Flex align="center" justify="center" gap={'10rem'}>
      {/* <Center flex={'1'} minH="100%"> */}
      <AuthForm auth_type="sign_up" user_type={params.subdomain} />
      {/* </Center> */}
      {params.subdomain === 'vendor' && (
        <Center maxW="85.3rem" aspectRatio={'853 / 695'} py="4rem">
          <Image
            src="/images/auth/vendors_signup_image.png"
            alt="Sendor Signup Image"
          />
        </Center>
      )}
    </Flex>
  );
}
