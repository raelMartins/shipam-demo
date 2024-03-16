import { Box, Center, Flex, Image, Link, Text, VStack } from '@chakra-ui/react';
import { ShipamLogoDefault } from 'components/design_icons';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

export const PrimaryFooter = () => {
  const footer_sections = [
    {
      title: 'About',
      links: [
        { content: 'About', url: '/about' },
        { content: 'Find Store', url: '/find-store' },
        { content: 'Categories', url: '/categories' },
        { content: 'Blogs', url: '/blogs' }
      ]
    },
    {
      title: 'Partnership',
      links: [
        { content: 'About', url: '/about' },
        { content: 'Find Store', url: '/find-store' },
        { content: 'Categories', url: '/categories' },
        { content: 'Blogs', url: '/blogs' }
      ]
    },
    {
      title: 'Information',
      links: [
        { content: 'Help Center', url: '/help-center' },
        { content: 'Money Refund', url: '/refund' },
        { content: 'Shipping', url: '/shipping' },
        { content: 'Contact Us', url: '/contact-us' }
      ]
    },
    {
      title: 'For Users',
      links: [
        { content: 'Login', url: '/auth/login' },
        { content: 'Register', url: '/auth/register' },
        { content: 'Settings', url: '/account/settings' },
        { content: 'My Orders', url: '/account/orders' }
      ]
    },
    {
      title: 'Get App',
      links: [
        {
          content: (
            <Image
              src="/images/misc/get_on_apple_store.svg"
              alt="Get On Apple Store Button"
              cursor={'pointer'}
            />
          ),
          url: '#'
        },
        {
          content: (
            <Image
              src="/images/misc/get_on_google_play.svg"
              alt="Get On Google Play Button"
              cursor={'pointer'}
            />
          ),
          url: '#'
        }
      ]
    }
  ];

  return (
    <Box
      bg="#FFFFFF"
      p={'5.3rem 1rem 7.9rem'}
      w={'full'}
      h="max-content"
      // color={'#BDC4CD'}
      color={'#8B96A5'}
    >
      <Flex
        // w={{ base: '90%', md: '80%' }}
        m={'0px auto'}
        justify={'space-between'}
        maxWidth={'148.4rem'}
        width={'100%'}
        margin="0rem auto"
        flexWrap={'wrap'}
      >
        <VStack alignItems={'flex-start'} gap={'3rem'}>
          <ShipamLogoDefault />
          <Text color="#505050" lineHeight={'2.4rem'} maxW={'36.8rem'}>
            Best information about the company goes here but now lorem ipsum is
          </Text>
          <Flex gap={'1.333rem'} align={'center'}>
            <Center
              color={'#fff'}
              bg="#BDC4CD"
              h="4.3rem"
              w="4.3rem"
              borderRadius={'50%'}
              fontSize={'2rem'}
              cursor={'pointer'}
            >
              <FaFacebookF />
            </Center>
            <Center
              color={'#fff'}
              bg="#BDC4CD"
              h="4.3rem"
              w="4.3rem"
              borderRadius={'50%'}
              fontSize={'2rem'}
              cursor={'pointer'}
            >
              <FaTwitter />
            </Center>
            <Center
              color={'#fff'}
              bg="#BDC4CD"
              h="4.3rem"
              w="4.3rem"
              borderRadius={'50%'}
              fontSize={'2rem'}
              cursor={'pointer'}
            >
              <FaLinkedinIn />
            </Center>
            <Center
              color={'#fff'}
              bg="#BDC4CD"
              h="4.3rem"
              w="4.3rem"
              borderRadius={'50%'}
              fontSize={'2rem'}
              cursor={'pointer'}
            >
              <ImInstagram />
            </Center>
            <Center
              color={'#fff'}
              bg="#BDC4CD"
              h="4.3rem"
              w="4.3rem"
              borderRadius={'50%'}
              fontSize={'2rem'}
              cursor={'pointer'}
            >
              <FaYoutube />
            </Center>
          </Flex>
        </VStack>
        {footer_sections.map((section, ind_1) => {
          return (
            <VStack key={ind_1} alignItems={'flex-start'} gap={'1rem'}>
              <Text color={'#1C1C1C'} fontWeight={'500'} lineHeight={'2.2rem'}>
                {section.title}
              </Text>
              {section.links.map((el, ind_2) => (
                <Link key={ind_2} href={el.url}>
                  {el.content}
                </Link>
              ))}
            </VStack>
          );
        })}
      </Flex>
    </Box>
  );
};
