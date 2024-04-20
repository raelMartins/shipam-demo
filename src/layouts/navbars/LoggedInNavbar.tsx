import {
  Badge,
  Box,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  Link,
  Select,
  Switch,
  Text,
  VStack
} from '@chakra-ui/react';
import { ShipamLogoDefault } from 'components/design_icons';
import styles from './loggedinnavbar.module.scss';
import { FaUser } from 'react-icons/fa';
import { Button } from 'ui-lib';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { ImCart } from 'react-icons/im';
import { CategoryDropdown } from 'components/general_product/CategoryDropDown';
import { useState } from 'react';
import { UserTypeSwitch } from './UserTypeSwitch';

export const LoggedInNavbar = ({
  type,
  profile
}: {
  type?: string;
  profile: any;
}) => {
  const QuickNav = () => {
    return type == 'buyer' ? (
      <HStack gap="2rem" color="#8B96A5">
        <UserTypeSwitch type={type} />
        <Link _hover={{ textDecoration: 'none' }} href="/account">
          <VStack gap={'.7rem'}>
            <FaUser fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              Profile
            </Text>
          </VStack>
        </Link>
        <Link _hover={{ textDecoration: 'none' }} href="/inbox">
          <VStack gap={'.7rem'}>
            <BsChatLeftTextFill fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              Message
            </Text>
          </VStack>
        </Link>
        <Link _hover={{ textDecoration: 'none' }} href="/orders">
          <VStack gap={'.7rem'}>
            <AiFillHeart fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              Orders
            </Text>
          </VStack>
        </Link>
        <Link _hover={{ textDecoration: 'none' }} href="/cart">
          <VStack gap={'.7rem'}>
            <ImCart fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              My Cart
            </Text>
          </VStack>
        </Link>
      </HStack>
    ) : type == 'vendor' ? (
      <HStack gap="2rem" color="#8B96A5">
        <UserTypeSwitch type={type} />
        <Link _hover={{ textDecoration: 'none' }} href="/account">
          <VStack gap={'.7rem'}>
            <FaUser fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              Profile
            </Text>
          </VStack>
        </Link>
        <Link _hover={{ textDecoration: 'none' }} href="/inbox">
          <VStack gap={'.7rem'}>
            <BsChatLeftTextFill fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              Message
            </Text>
          </VStack>
        </Link>
      </HStack>
    ) : (
      <HStack gap="2rem" color="#8B96A5">
        <Link _hover={{ textDecoration: 'none' }} href="/account">
          <VStack gap={'.7rem'}>
            <FaUser fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              Profile
            </Text>
          </VStack>
        </Link>
        <Link _hover={{ textDecoration: 'none' }} href="/inbox">
          <VStack gap={'.7rem'}>
            <BsChatLeftTextFill fontSize={'2rem'} />
            <Text fontSize={'1.2rem'} lineHeight={'1.4rem'}>
              Message
            </Text>
          </VStack>
        </Link>
      </HStack>
    );
  };

  return (
    <Box
      className={styles.logged_in_navbar}
      w={'full'}
      p={'2rem 1rem'}
      bg="#ffffff"
      borderBottom=".1rem solid #DEE2E6"
    >
      <Flex
        // w={{ base: '90%', md: '75%' }}
        m="0rem auto"
        align={'center'}
        justify={'space-between'}
        maxWidth={'148.4rem'}
        width={'100%'}
        margin="0rem auto"
        gap={'2rem'}
      >
        <Flex align={'center'} gap={'3rem'}>
          <Link href="/">
            <ShipamLogoDefault />
          </Link>
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
        <InputGroup
          maxW={'67rem'}
          border=".16rem solid var(--shipam-primary-red)"
          display={'flex'}
          alignItems="center"
          fontSize="1.6rem"
          borderRadius={'6rem'}
        >
          <Input
            type="text"
            flex="1"
            w="100%"
            fontSize="1.6rem"
            p="2rem"
            borderRadius={'none'}
            border={'none'}
            borderRight={'.16rem solid var(--shipam-primary-red)'}
            _focus={{ outline: 'none' }}
            _focusVisible={{ outline: 'none' }}
          />
          {/* <Select
            placeholder="Select category"
            w="15rem"
            h="max-content"
            fontSize="1.6rem"
            borderRadius={'none'}
            outline={'none'}
            border={'none'}
            _focus={{ outline: 'none' }}
            _focusVisible={{ outline: 'none' }}
          >
            <option value="all">All Categories</option>
            <option value="category_1">Category 1</option>
            <option value="category_2">Category 2</option>
            <option value="category_#">Category 3</option>
          </Select> */}
          <CategoryDropdown
            placeholder="Select category"
            w="15rem"
            selectStyle={{
              height: 'max-content',
              fontSize: '1.6rem',
              borderRadius: 'none',
              outline: 'none',
              border: 'none'
            }}
          />

          {/* <Button bg="var(--shipam-primary-red)" color="white">
            Search
          </Button> */}
          <Button
            p="2rem"
            fontSize="1.6rem"
            borderRadius={'0rem 6rem 6rem 0rem'}
          >
            Search
          </Button>
        </InputGroup>
        {profile ? (
          <QuickNav />
        ) : (
          <Flex gap={'2rem'} className={styles.login_buttons}>
            <Button as={Link} href={'/auth/login'} className={styles.button}>
              Sign In
            </Button>
            <Button
              as={Link}
              href={type ? `/auth/register` : '/auth/join-shipam'}
              className={styles.button}
            >
              Join Shipam
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
