import { login, profile } from '@/modules/auth/services/authService';
import { useAuthStore } from '@/modules/auth/stores/authStore';
import type { UserData } from '@/modules/auth/types/authentication';
import type { LoginFormData, LoginResponse } from '@/modules/auth/types/login';
import { setAuthToken as setAxiosToken } from '@/modules/core/services/axiosClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

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
      toast.success(`Bienvenido, ${data.user.username}`);
    },
    onError: error => {
      let message = 'An error occurred';
      if (error.request) {
        switch (error.request.status) {
          case 401:
            message = 'Usuario o contraseña incorrectos';
            break;
          case 403:
            message = 'No tienes permiso para realizar esta acción';
            break;
          case 404:
            message = 'Recurso solicitado no encontrado';
            break;
          case 500:
            message = 'Error inesperado en el servidor';
            break;
          default:
            message = 'Error inesperado';
        }
      } else {
        message = 'Network error: Could not connect to server';
      }

      toast.error(message);
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
