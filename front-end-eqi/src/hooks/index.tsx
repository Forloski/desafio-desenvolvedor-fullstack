import React from 'react';

import { UserProvider } from './UserContext';

const AppProvider: React.FC = ({ children }) => (
  <UserProvider>{children}</UserProvider>
);

export default AppProvider;
