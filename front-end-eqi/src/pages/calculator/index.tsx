import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/theme';
import Header from './ui/header';
import Hero from './ui/calculator';
import Articles from './ui/articles';

const Calculator: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Articles />
    </ThemeProvider>
  );
};

export default Calculator;
