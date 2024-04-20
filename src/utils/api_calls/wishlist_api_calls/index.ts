import { BASE_URL } from '../api_endpoints';
import { FilterParams, Token } from 'utils/types/general_types';

export const get_all_wishlist_items = async (
  token: Token,
  data: FilterParams = {}
) => {
  const { page = 1 } = data;

  const res = await fetch(`${BASE_URL}/products/wishlist?page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });

  const response = await res.json();
  return response?.data;
};

export const add_item_to_wishlist = async (
  token: Token,
  data: FilterParams
) => {
  const { product_id } = data;

  const res = await fetch(`${BASE_URL}/products/wishlist/add/${product_id}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });

  const response = await res.json();
  return response?.data;
};

export const remove_item_from_wishlist = async (
  token: Token,
  data: FilterParams
) => {
  const { product_id } = data;
  const res = await fetch(
    `${BASE_URL}/products/wishlist/delete/${product_id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
  );

  const response = await res.json();
  return response?.data;
};
