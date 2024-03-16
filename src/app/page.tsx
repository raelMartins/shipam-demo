import { Flex } from '@chakra-ui/react';
import styles from './page.module.scss';
import { AuthNavbar } from 'layouts/navbars/AuthNavbar';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/shop');
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
