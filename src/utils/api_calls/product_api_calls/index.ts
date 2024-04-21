import { BASE_URL } from '../api_endpoints';
import { FilterParams } from 'utils/types/general_types';

export const get_all_products = async (data: FilterParams = {}) => {
  const { page = 1 } = data;

  const res = await fetch(`${BASE_URL}/products/?page=${page}`, {
    method: 'GET'
  });

  const response = await res.json();
  return response?.data;

  // return res.data.data;
};

export const get_products_by_user = async (data: FilterParams) => {
  const { page = 1, user_id } = data;

  const res = await fetch(`${BASE_URL}/products/user/${user_id}?page=${page}`, {
    method: 'GET'
  });

  const response = await res.json();
  return response?.data;
};

export const get_products_by_category = async (data: FilterParams) => {
  const { page = 1, product_category } = data;
  const res = await fetch(
    `${BASE_URL}/products/category/${product_category}?page=${page}`,
    {
      method: 'GET'
    }
  );

  const response = await res.json();
  return response?.data;
};

export const get_product_by_id = async (data: FilterParams) => {
  const { product_id } = data;

  const res = await fetch(`${BASE_URL}/products/product/${product_id}`, {
    method: 'GET'
  });

  const response = await res.json();
  return response?.data;
};

export const get_product_by_slug = async (data: FilterParams) => {
  const { product_slug } = data;

  const res = await fetch(
    `${BASE_URL}/products/product/fetch/${product_slug}`,
    {
      method: 'GET'
    }
  );

  const response = await res.json();
  return response?.data;
};

export const create_new_product = async (data: any) => {
  const res = await fetch(`${BASE_URL}/products/store`, {
    method: 'POST',
    body: data,
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  const response = await res.json();
  return response?.data;
};
