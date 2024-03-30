'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link as ChakraLink
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const pathname = usePathname();
  const [paths, setPaths] = useState<string[]>([]);
  console.log(pathname);

  useEffect(() => {
    const res = pathname
      .split('?')[0]
      .split('#')[0]
      .split('/')
      .filter((el) => el !== '');
    setPaths(res);
  }, [pathname]);

  return (
    <Breadcrumb separator=">" color={'#8B96A5'} my={'20px'}>
      <BreadcrumbItem>
        <ChakraLink as={Link} href="/" _hover={{ textDecor: 'underline' }}>
          Home
        </ChakraLink>
      </BreadcrumbItem>
      {paths.map((path: string, index: number) => (
        <BreadcrumbItem key={index}>
          <ChakraLink
            as={Link}
            href={`/${paths.slice(0, index + 1).join('/')}`}
            textTransform={'capitalize'}
            _hover={{ textDecor: 'underline' }}
          >
            {path
              .split('-')
              .join(' ')
              .split('_')
              .join(' ')
              .split('%20')
              .join(' ')}
          </ChakraLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
