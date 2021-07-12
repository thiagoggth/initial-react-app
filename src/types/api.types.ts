import User from '../models/User';

export interface Report {
  name: string;
  message: string;
}

export interface ResultLogin {
  user: User;
  token: string;
}

export interface Result<T> {
  data: T;
  message: string;
  success: boolean;
  errors: Report[];
}
export type Paginate<T> = {
  results: T[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  limit: number;
};
