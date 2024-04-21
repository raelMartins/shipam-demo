import { Flex } from '@chakra-ui/react';
import styles from './page.module.scss';
import { BasicFooter } from 'layouts/footers/BasicFooter';
import { redirect } from 'next/navigation';

export default function Home({ params }: { params: { subdomain: string } }) {
  params.subdomain === 'buyer'
    ? redirect('/shop')
    : params.subdomain === 'vendor'
    ? redirect('/account')
    : null;
  return <main className={styles.main}></main>;
}
