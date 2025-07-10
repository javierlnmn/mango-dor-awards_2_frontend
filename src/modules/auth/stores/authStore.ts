import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserData } from '@/modules/auth/types/authentication';

interface AuthStore {
  isAuthenticated: boolean | null;
  user: UserData;
  login: (user: UserData) => void;
  logout: () => void;
}

const emptyUser: UserData = {
  id: 0,
  username: '',
  token: '',
  first_name: '',
  last_name: '',
  date_joined: '',
  last_login: '',
};

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      isAuthenticated: false,
      user: emptyUser,
      login: (user: UserData) => {
        set({ isAuthenticated: true, user });
      },
      logout: () => {
        set({ isAuthenticated: false, user: emptyUser });
      },
    }),
    {
      name: 'auth-storage',
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
