'use client';

import { Flex } from '@chakra-ui/react';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import {
  add_item_to_wishlist,
  remove_item_from_wishlist
} from 'utils/api_calls/wishlist_api_calls';
import { catch_async_error } from 'utils/helpers/helper_functions';

export const AddToWishlistButton = ({ product_id, children, ...rest }: any) => {
  const token = getCookie('shipam_token');
  const [inWishlist, setInWishlist] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle_wishlist = catch_async_error(
    async () => {
      if (loading) return;
      const current_wishlist_status = inWishlist;
      setInWishlist(!inWishlist);
      if (product_id) {
        setLoading(true);
        try {
          if (!inWishlist) {
            const res = await add_item_to_wishlist(token, { product_id });
            console.log(res);
          } else {
            const res = await remove_item_from_wishlist(token, { product_id });
            console.log(res);
          }
          setLoading(false);
        } catch (err) {
          setInWishlist(current_wishlist_status);
          throw err;
        }
      }
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
