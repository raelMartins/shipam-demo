import axios from 'axios';
import { string } from 'yup';
import { BASE_URL } from './api_endpoints';

export const login = async (data: { email: string; password: string }) => {
  const res = await axios({
    method: 'POST',
    url: `${BASE_URL}/auth/login`,
    data
  });

  return res.data.data;
};

export const register = async (data: {
  user_type: string;
  firstname: string;
  lastname: string;
  phone_number: string;
  email: string;
  password: string;
  password_confirmation: string;
  agree_terms: number;
}) => {
  const res = await axios({
    method: 'POST',
    url: `${BASE_URL}/auth/register`,
    data
  });

  return res.data.data;
};
