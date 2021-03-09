import React, { useState, useCallback, useContext } from 'react';
import api from '../services/apiClient';
import IUser from '../interfaces/IUser';

interface IUserContextData {
  userState: IUser;
  storeUser(signInCredentials: ISignInCredential): Promise<IUser>;
  readSimulations(id: string): Promise<IUser>;
}

interface ISignInCredential {
  name: string;
  email: string;
  phone: string;
}

interface ISimulations {
  investmentTime: string;
  initialDeposit: string;
  monthlyDeposit: string;
}

const UserContext = React.createContext({} as IUserContextData);

export const UserProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState<IUser>(() => {
    const user = localStorage.getItem('@SimuladorCDB:user');

    if (user) {
      return JSON.parse(user);
    }

    return {} as IUser;
  });

  // set userState for Context use and store user on database
  const storeUser = useCallback(async ({ name, email, phone }) => {
    const response = await api.post<IUser>('users', { name, email, phone });

    const user = response.data;

    setUserState(user);

    localStorage.setItem('@SimuladorCDB:user', JSON.stringify(user));

    return user;
  }, []);

  const readSimulations = useCallback(async (id: string) => {
    console.log('hi');
    const response = await api.get<ISimulations[]>(`simulations/${id}`);

    const simulations = response.data;

    const user = { ...userState, simulations };

    setUserState(user);

    localStorage.setItem('@SimuladorCDB:user', JSON.stringify(user));

    return user;
  }, []);

  return (
    <UserContext.Provider
      value={{
        userState,
        storeUser,
        readSimulations,
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
