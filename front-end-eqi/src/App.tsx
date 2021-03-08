import React from 'react';

// import Home from './pages/home';
import Calculator from './pages/calculator';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Calculator />
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
