'use client';

import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

export const AddToWishlistButton = ({ ...rest }) => {
  const [inWishlist, setInWishlist] = useState(false);

  const toggle_wishlist = () => {
    setInWishlist(!inWishlist);
  };

  return (
    <span {...rest} onClick={toggle_wishlist}>
      {inWishlist ? <IoHeart /> : <IoHeartOutline />}
    </span>
  );
};
