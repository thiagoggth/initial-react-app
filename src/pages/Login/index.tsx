import { Card, OutlinedInput } from '@material-ui/core';
import React from 'react';
import { useAuth } from '../../contexts/auth.context';
import * as S from './styles';

const Login = () => {
  const { signIn } = useAuth();
  let username = '';
  let password = '';

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signIn(username, password);
    } catch (error) {
      alert('Error: ' + error.message);
      console.log(error);
    }
  };

  return (
    <S.HomeWrapper>
      <Card>
        <form onSubmit={handleLogin}>
          <h1>Login page</h1>
          <label className="input-label">Username</label>
          <OutlinedInput name="username" onChange={(e) => (username = e.target.value)} />
          <label className="input-label">Password</label>
          <OutlinedInput name="password" onChange={(e) => (password = e.target.value)} />
          <div className="buttons-wrapper">
            <S.CardButtons type="submit">Login</S.CardButtons>
          </div>
        </form>
      </Card>
    </S.HomeWrapper>
  );
};

export default Login;
