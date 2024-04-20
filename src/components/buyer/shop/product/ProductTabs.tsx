'use client';

import {
  Grid,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';
import { SummerSaleDIscount } from '../promotions/SummerSaleDIscount';
import { Button } from 'ui-lib';

export const ProductTabs = ({ product }: { product: any }) => {
  const specs = JSON.parse(product?.specifications);
  const specs_array = Object.entries(specs);
  return (
    <Tabs isFitted>
      <TabList color="#8B96A5" lineHeight={'1.9rem'}>
        <Tab
          fontSize={'1.6rem'}
          _selected={{
            color: 'var(--shipam-primary-red)',
            borderBottom: '.2rem solid'
          }}
        >
          Description
        </Tab>
        <Tab
          fontSize={'1.6rem'}
          _selected={{
            color: 'var(--shipam-primary-red)',
            borderBottom: '.2rem solid'
          }}
        >
          Reviews
        </Tab>
        <Tab
          fontSize={'1.6rem'}
          _selected={{
            color: 'var(--shipam-primary-red)',
            borderBottom: '.2rem solid'
          }}
        >
          Buy from vendor in bulk
        </Tab>
        <Tab
          fontSize={'1.6rem'}
          _selected={{
            color: 'var(--shipam-primary-red)',
            borderBottom: '.2rem solid'
          }}
        >
          About seller
        </Tab>
        <Tab
          fontSize={'1.6rem'}
          _selected={{
            color: 'var(--shipam-primary-red)',
            borderBottom: '.2rem solid'
          }}
        >
          Bulk buy
        </Tab>
      </TabList>
      <TabPanels padding={'2rem'} color="#505050">
        <TabPanel>
          <Text>
            {product?.description ||
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.`}
          </Text>
          <Grid templateColumns={'1fr 2fr'} w="76rem" mt="4.8rem">
            {specs_array.map((el: any[]) => (
              <>
                <Text p=".6rem 1rem" border=".1rem solid #E0E7E9" bg="#EFF2F4">
                  {el[0] || 'Feature'}
                </Text>
                <Text p=".6rem 1rem" border=".1rem solid #E0E7E9">
                  {el[1]}
                </Text>
              </>
            ))}
          </Grid>
          <List my="2.6rem" spacing={'1rem'}>
            <ListItem>
              <ListIcon as={MdCheck} fontSize={'2rem'} />
              Lorem ipsum dolor sit amet
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} fontSize={'2rem'} />
              Consectetur adipiscing elit
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} fontSize={'2rem'} />
              Integer molestie lorem at massa
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheck} fontSize={'2rem'} />
              Facilisis in pretium nisl aliquet
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <Heading>Reviews</Heading>
        </TabPanel>
        <TabPanel>
          <Grid templateColumns={'repeat(4, 1fr)'} mb="3rem" gap="1.4rem">
            <VStack alignItems={'flex-start'}>
              <Text>Quantity</Text>
              <Input p="2rem" bg="#ffffff" type="number" />
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>Delivery address</Text>
              <Input p="2rem" bg="#ffffff" type="text" />
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>Desired Delivery Date</Text>
              <Input p="2rem" bg="#ffffff" type="text" />
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>Budget</Text>
              <Input p="2rem" bg="#ffffff" type="number" />
            </VStack>
          </Grid>
          <Button fontSize={'1.6rem'} p="2rem">
            Send bulk buy request to vendor
          </Button>
          <SummerSaleDIscount />
        </TabPanel>
        <TabPanel>
          <Heading>About Seller</Heading>
        </TabPanel>
        <TabPanel>
          <Heading>Bulk Buy</Heading>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
