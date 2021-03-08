import React, { useState, useCallback, useContext } from 'react';
import api from '../services/apiClient';
import IUser from '../interfaces/IUser';

interface IUserContextData {
  userState: IUser;
  storeUser(user: IUser): Promise<IUser>;
  updateUser(user: IUser): Promise<IUser>;
  readUser(id: string): void;
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
  const storeUser = useCallback(async user => {
    setUserState(user);
    const response = await api.post<IUser>('users', user);
    return response.data;
  }, []);

  // set userState for Context use and update user on database
  const updateUser = useCallback(async user => {
    setUserState(user);
    const response = await api.put<IUser>(`user/${user.id}`, user);
    return response.data;
  }, []);

  // read user from our back-end database
  const readUser = useCallback(async user => {
    const response = await api.get<IUser>(`user/${user.id}`, user);
    setUserState(response.data);
    return response.data;
  }, []);

  return (
    <UserContext.Provider
      value={{
        userState,
        storeUser,
        updateUser,
        readUser,
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
