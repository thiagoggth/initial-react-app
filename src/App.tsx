import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import { AuthProvider } from './contexts/auth.context';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
