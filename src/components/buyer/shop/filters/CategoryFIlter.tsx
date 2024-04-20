import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

export const CategoryFilter = ({
  apply_filter,
  categories = []
}: {
  apply_filter?: Function;
  categories: any[];
}) => {
  const [showAll, setShowAll] = useState(false);
  const limit = 5;
  return (
    <AccordionItem border={'none'} borderBottom={'.1rem solid #DEE2E7'}>
      <AccordionButton
        p={'2rem 0rem'}
        _hover={{ background: 'inherit' }}
        color="#1C1C1C"
      >
        <Box
          as="span"
          flex="1"
          textAlign="left"
          fontSize={'1.6rem'}
          lineHeight={'2rem'}
          fontWeight={'600'}
        >
          Category
        </Box>
        <AccordionIcon fontSize={'2rem'} />
      </AccordionButton>
      <AccordionPanel px={'0px'} color={'#505050'}>
        <Flex direction={'column'} height={'100%'} gap={'1rem'}>
          {categories
            ?.slice(0, !showAll ? limit : categories.length + 1)
            .map((category: any, i: number) => (
              <Link href={`/shop/${category.slug}`} key={i}>
                {category.name}
              </Link>
            ))}
          {!showAll && categories.length > limit && (
            <Text
              color="var(--shipam-primary-red)"
              cursor={'pointer'}
              onClick={() => setShowAll(true)}
            >
              See all
            </Text>
          )}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};
