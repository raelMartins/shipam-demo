'use client';

import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { catch_async_error } from 'utils/helpers/helper_functions';

export const AddToWishlistButton = ({ children, ...rest }: any) => {
  const [inWishlist, setInWishlist] = useState(false);

  const toggle_wishlist = catch_async_error(
    async () => {
      setInWishlist(!inWishlist);
    },
    {
      successMessage: {
        description: inWishlist ? 'Removed from wishlist' : 'Added to wishlist!'
      }
    }
  );

  return (
    <span {...rest} onClick={toggle_wishlist}>
      {children ? (
        <Flex as="span" direction={'column'} h="max-content">
          {children}
        </Flex>
      ) : inWishlist ? (
        <IoHeart />
      ) : (
        <IoHeartOutline />
      )}
    </span>
  );
};
