import React from 'react';

import { StylesProvider } from '@material-ui/core/styles';
import { StyledContainer, StyledText } from './styles';

const DefaultArticles: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <StyledContainer>
        <StyledText>
          {children}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </StyledText>
      </StyledContainer>
    </StylesProvider>
  );
};

export default DefaultArticles;
