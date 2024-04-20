import axios from 'axios';
import { BASE_URL } from '../api_endpoints';
import { setCookie } from 'cookies-next';
import { Token } from 'utils/types/general_types';

export const login = async (data: { email: string; password: string }) => {
  const res = await axios({
    method: 'POST',
    url: `${BASE_URL}/auth/login`,
    data
  });

  // const res = await fetch(`${BASE_URL}/auth/login`, {
  //   method: 'POST',
  //   headers:{ 'Content-Type': 'application/json'},
  //   // body: {...data}
  //   // headers: { Accept: 'application/json', Cookie: `__Host-GAPS=${token}` },
  // });

  // const response = await res.json();
  const response = res.data;
  console.log(response);

  setCookie('shipam_token', response.data.token);
  setCookie('shipam_user_id', response.data.user.id);
  // return res.data.data;
  return response.data;
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

  setCookie('shipam_token', res.data.data.token);
  setCookie('shipam_user_id', res.data.data.user.id);
  return res.data.data;
};

export const get_user_profile = async (data: {
  token?: Token;
  user_id: string;
}) => {
  const { user_id } = data;
  try {
    const res = await fetch(`${BASE_URL}/user/profile/show/${user_id}`, {
      // headers: { Accept: 'application/json', Cookie: `__Host-GAPS=${token}` },
      method: 'GET'
    });
    return res.json();
  } catch (err: any) {
    console.error(err);
    console.log(err.response);
    return null;
  }
};
