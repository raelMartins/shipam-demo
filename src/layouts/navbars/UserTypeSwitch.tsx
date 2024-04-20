'use client';
import { HStack, Switch, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const UserTypeSwitch = ({ type }: { type: string }) => {
  const [routing, setRouting] = useState(false);
  const switch_option =
    type == 'vendor' ? 'buyer' : type == 'buyer' ? 'vendor' : 'buyer';
  const switch_type = () => {
    setRouting(true);
    console.log(location);
    const old_host_name = location.hostname.split('.')[0];
    const new_url = location.href.replace(
      `/${old_host_name}.`,
      `/${switch_option}.`
    );
    console.log(new_url);
    location.assign(new_url);
  };
  return (
    <HStack
      textTransform={'capitalize'}
      bg={'var(--shipam-red-pale)'}
      color={'var(--shipam-primary-red)'}
      padding={'.8rem 1.6rem'}
      borderRadius={'3rem'}
      fontSize={'1.2rem'}
      lineHeight={'2.2rem'}
      fontWeight={'700'}
      gap=".8rem"
      w="max-content"
    >
      <Text textTransform={'capitalize'}>Switch To {switch_option}</Text>
      <Switch
        isChecked={routing}
        colorScheme="teal"
        size="lg"
        onChange={switch_type}
      />
    </HStack>
  );
};
