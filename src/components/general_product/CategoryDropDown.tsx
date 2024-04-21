'use client';

import { useEffect, useState } from 'react';
import { Select } from 'ui-lib';
import { get_all_categories } from 'utils/api_calls/categories_api_calls';
import { ProductCategory } from 'utils/types/general_types';

export const CategoryDropdown = ({
  label = '',
  use_id = false,
  ...rest
}: any) => {
  const [categories, set_categories] = useState([]);
  const get_categories = async () => {
    const res = await get_all_categories();
    set_categories(res);
  };
  useEffect(() => {
    get_categories();
  }, []);
  return (
    <Select label={label} {...rest}>
      <option hidden>Select Category</option>
      {categories.map((el: ProductCategory) => (
        <option key={el.id} value={use_id ? el.id : el.slug}>
          {el.name}
        </option>
      ))}
    </Select>
  );
};
