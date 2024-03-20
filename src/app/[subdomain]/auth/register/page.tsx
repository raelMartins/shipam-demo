import { Center } from '@chakra-ui/react';
import { AuthForm } from 'components/auth/AuthForm';

export default function RegisterPage() {
  return (
    <Center flex={'1'} minH="100%">
      <AuthForm type="sign_up" />
    </Center>
  );
}
