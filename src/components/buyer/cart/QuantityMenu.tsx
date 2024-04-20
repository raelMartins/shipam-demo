'use client';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

export const QuantityMenu = ({ quantity = 52, increments = 5, min = 5 }) => {
  const [selected_quantity, set_selected_quantity] = useState<any>(null);

  const select_quantity = (amount: number | string) => {
    set_selected_quantity(amount);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IoChevronDown />}
        bg="#fff"
        fontSize={'1.4rem'}
        border=".1rem solid #DEE2E7"
        p="1.6rem"
        borderRadius={'.4rem'}
        fontWeight={'400'}
      >
        {selected_quantity ? `Qty: ${selected_quantity}` : 'Select Quantity'}
      </MenuButton>
      <MenuList maxH={'10rem'}>
        {Array(Math.ceil((quantity - min) / increments) + 1)
          .fill('')
          .map((el: any, i: number) => {
            const option_value =
              min + increments * i > quantity ? quantity : min + increments * i;
            return (
              <MenuItem key={i} onClick={() => select_quantity(option_value)}>
                Qty: {option_value}
              </MenuItem>
            );
          })}
      </MenuList>
    </Menu>
  );
};
