import React, { useState, useCallback, useContext } from 'react';
import api from '../services/apiClient';
import IUser from '../interfaces/IUser';

interface IUserContextData {
  userState: IUser;
  storeUser(signInCredentials: SignInCredential): Promise<IUser>;
}

interface SignInCredential {
  name: string;
  email: string;
  phone: string;
}

const defaultUserState: IUser = {
  id: '',
  name: '',
  email: '',
  phone: '',
  simulations: [],
};

const UserContext = React.createContext({} as IUserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState<IUser>(defaultUserState);

  // set userState for Context use and store user on database
  const storeUser = useCallback(async ({ name, email, phone }) => {
    const response = await api.post<IUser>('users', { name, email, phone });

    const user = response.data;

    setUserState(user);

    localStorage.setItem('@SimuladorCDB:user', JSON.stringify(user));

    return user;
  }, []);

  return (
    <UserContext.Provider
      value={{
        userState,
        storeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): IUserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useuseUser must be used within an UserProvider');
  }

  return context;
}
