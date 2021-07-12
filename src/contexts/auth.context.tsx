import React, { createContext, useContext, useEffect, useState } from 'react';
import User from '../models/User';
import api from '../services/api';
import * as authService from '../services/authService';

type AuthContextData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const { storedUser, storedToken } = getAuthItemsFromLocalStorage();

      if (storedUser && storedToken) {
        setDefaultHeaderToken(JSON.parse(storedToken));
        setUser(JSON.parse(storedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async (username: string, password: string) => {
    const response = await authService.signIn(username, password);
    const { data } = response;
    const { token } = data;

    saveInLocalStorage(response.data.user, token);
    setDefaultHeaderToken(token);
    setUser(response.data.user);
  };

  const signOut = () => {
    setUser(null);
    cleanAuthItemsFromLocalStorage();
  };

  const cleanAuthItemsFromLocalStorage = () => {
    localStorage.removeItem('@RJSAuth:user');
    localStorage.removeItem('@RJSAuth:token');
  };

  const setDefaultHeaderToken = (token: string) => {
    api.defaults.headers['authorization'] = `Bearer ${token}`;

    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          signOut();
        }
        return Promise.reject(error);
      }
    );
  };

  const saveInLocalStorage = (user: User, token: string) => {
    localStorage.setItem('@RJSAuth:user', JSON.stringify(user));
    localStorage.setItem('@RJSAuth:token', JSON.stringify(token));
  };

  const getAuthItemsFromLocalStorage = () => {
    const storedUser = localStorage.getItem('@RJSAuth:user') || '';
    const storedToken = localStorage.getItem('@RJSAuth:token') || '';

    return { storedUser, storedToken };
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
