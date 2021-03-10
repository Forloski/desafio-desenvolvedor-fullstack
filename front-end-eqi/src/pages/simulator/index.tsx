import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import Header from './ui/header';
import Calculator from './ui/calculator';
import Articles from './ui/articles';

const Simulator: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Calculator />
      <Articles />
    </ThemeProvider>
  );
};

export default Simulator;
