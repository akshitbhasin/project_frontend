import axios from 'axios';

const tokenClient = axios.create({
    baseURL: `https://44fb8ce1-cfb9-4a84-a846-7bc7ef065b36.mock.pstmn.io`,
  });

export const loginService = async (loginDetails) =>{
    return await tokenClient.post(`/api/getToken`, loginDetails);
}