import axios from 'axios';
import { BASE_URL } from '../api_endpoints';
import { FilterParams } from 'utils/types/general_types';

export const get_all_categories = async (data: FilterParams = {}) => {
  const { page = 1 } = data;
  const res = await fetch(`${BASE_URL}/categories?page=${page}`, {
    method: 'GET'
  });
  const response = await res.json();
  return response?.data;
};

export const get_one_category = async (data: { slug: string }) => {
  const { slug } = data;
  const res = await fetch(`${BASE_URL}/categories/category/${slug}`, {
    method: 'GET'
  });
  const response = await res.json();
  return response?.data;
};
