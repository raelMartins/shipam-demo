import { Flex } from '@chakra-ui/react';
import styles from './page.module.scss';
import { AuthNavbar } from 'layouts/navbars/AuthNavbar';
import { BasicFooter } from 'layouts/footers/BasicFooter';

export default function Home() {
  return (
    <main className={styles.main}>
      <Flex minH={'100vh'} direction="column">
        <AuthNavbar />
        <Flex
          direction={'column'}
          flex={'1'}
          bg="#F8F9FA"
          padding={{ base: '2rem 1rem' }}
        ></Flex>
        <BasicFooter />
      </Flex>
    </main>
  );
}
