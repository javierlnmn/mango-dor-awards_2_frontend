import type { UserData } from '@/modules/auth/types/authentication';
import type { LoginResponse } from '@/modules/auth/types/login';
import axiosClient from '@/modules/core/services/axiosClient';

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axiosClient.post('auth/token/', {
    username,
    password,
  });
  return response.data;
};

export const profile = async (): Promise<UserData> => {
  const response = await axiosClient.get('auth/profile/');
  return response.data;
};
