'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
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
  }, []);

  return (
    <Breadcrumb separator=">" color={'#8B96A5'} my={'20px'}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      {paths.map((path: string, index: number) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink
            href={`/${paths.slice(0, index + 1).join('/')}`}
            textTransform={'capitalize'}
            isCurrentPage={paths.length - 1 === index}
          >
            {path
              .split('-')
              .join(' ')
              .split('_')
              .join(' ')
              .split('%20')
              .join(' ')}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
