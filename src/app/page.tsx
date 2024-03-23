import { Flex } from '@chakra-ui/react';
import styles from './page.module.scss';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { Navbar } from 'layouts/navbars/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Flex minH={'100vh'} direction="column">
        <Navbar />
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
