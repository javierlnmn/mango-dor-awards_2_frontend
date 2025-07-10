import { useMutation, useQuery } from '@tanstack/react-query';
import { login, profile } from '@/modules/auth/services/authService';
import { useAuthStore } from '@/modules/auth/stores/authStore';
import type { UserData } from '@/modules/auth/types/authentication';
import type { LoginFormData, LoginResponse } from '@/modules/auth/types/login';
import { setAuthToken as setAxiosToken } from '@/modules/core/services/axiosClient';

export const useLogin = () => {
  const { login: loginStore } = useAuthStore();

  const loginMutation = useMutation<LoginResponse, Error, LoginFormData>({
    mutationFn: ({ username, password }) => login(username, password),
    onSuccess: data => {
      loginStore({
        ...data.user,
        token: data.access,
      });
      setAxiosToken(data.access);
    },
    onError: error => {
      console.error('Login failed:', error);
    },
  });

  return {
    loginMutation,
  };
};

export const useProfile = () => {
  const profileQuery = useQuery<UserData>({
    queryKey: ['profile'],
    queryFn: profile,
  });

  return {
    profileQuery,
  };
};
