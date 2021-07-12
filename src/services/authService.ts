import { Result, ResultLogin } from '../types/api.types';
import api from './api';

export const signIn = async (user: string, password: string): Promise<Result<ResultLogin>> => {
  const response = await api.post('/auth/login', { user, password });
  return response.data;
};
