'use client';

import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineShoppingBag, HiShoppingBag } from 'react-icons/hi2';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { catch_async_error } from 'utils/helpers/helper_functions';

export const AddToCartButton = ({ children, ...rest }: any) => {
  const [inCart, setInCart] = useState(false);

  const toggle_cart = catch_async_error(
    async () => {
      setInCart(!inCart);
    },
    {
      successMessage: {
        description: inCart ? 'Removed from cart' : 'Added to cart!'
      }
    }
  );

  return (
    <span {...rest} onClick={toggle_cart}>
      {children ? (
        <Flex as="span" direction={'column'} h="max-content">
          {children}
        </Flex>
      ) : inCart ? (
        <HiShoppingBag />
      ) : (
        <HiOutlineShoppingBag />
      )}
    </span>
  );
};
