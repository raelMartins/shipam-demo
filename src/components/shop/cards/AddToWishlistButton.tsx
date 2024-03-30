'use client';

import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { catch_async_error } from 'utils/helpers/helper_functions';

export const AddToWishlistButton = ({ ...rest }) => {
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
      {inWishlist ? <IoHeart /> : <IoHeartOutline />}
    </span>
  );
};
