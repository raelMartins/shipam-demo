import { Badge, Box, Button, Flex, Link } from '@chakra-ui/react';
import { ShipamLogoDefault } from 'components/design_icons';
import styles from './authnavbar.module.scss';

export const AuthNavbar = ({ type }: { type?: string }) => {
  return (
    <Box
      className={styles.auth_navbar}
      w={'full'}
      p={'2rem 1rem'}
      bg="#ffffff"
      borderBottom=".1rem solid #DEE2E6"
    >
      <Flex
        w={{ base: '90%', md: '75%' }}
        m="0rem auto"
        align={'center'}
        justify={'space-between'}
      >
        <Flex align={'center'} gap={'3rem'}>
          <ShipamLogoDefault />
          {type && (
            <Box
              textTransform={'capitalize'}
              bg={'var(--shipam-red-pale)'}
              color={'var(--shipam-primary-red)'}
              padding={'1rem 2rem'}
              borderRadius={'3rem'}
              fontSize={'1.2rem'}
              lineHeight={'2.2rem'}
              fontWeight={'700'}
            >
              {type}
            </Box>
          )}
        </Flex>
        <Flex gap={'2rem'} className={styles.login_buttons}>
          <Link
            as={Button}
            href="/auth/login"
            bg={'#ffffff'}
            color="var(--shipam-primary-red)"
            className={styles.button}
          >
            Sign In
          </Link>
          <Link
            as={Button}
            href="/auth/signup"
            bg={'var(--shipam-primary-red)'}
            color="#ffffff"
            className={styles.button}
          >
            Join Shipam
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
