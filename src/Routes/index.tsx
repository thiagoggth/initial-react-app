import React from 'react';
import Loading from '../components/Loading';
import { useAuth } from '../contexts/auth.context';
import AppRoutes from './App.routes';
import AuthRoutes from './Auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
