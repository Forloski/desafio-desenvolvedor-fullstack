import React, { useState, useCallback, useContext } from 'react';
import api from '../services/apiClient';
import IUser from '../interfaces/IUser';

interface IUserContextData {
  userState: IUser;
  storeUser(signInCredentials: ISignInCredential): Promise<IUser>;
  readSimulations(): Promise<IUser>;
  storeSimulation(simulation: IStoreSimulation): Promise<IUser>;
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

interface IStoreSimulation extends ISimulations {
  userId: string;
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

    localStorage.setItem('@SimuladorCDB:user', JSON.stringify(user));

    setUserState(user);

    return user;
  }, []);

  const readSimulations = useCallback(async () => {
    const localUser = JSON.parse(
      localStorage.getItem('@SimuladorCDB:user') || '',
    );

    const response = await api.get<ISimulations[]>(
      `simulations/${localUser.id}`,
    );

    const simulations = response.data;

    const user = { ...localUser, simulations };

    setUserState(user);

    localStorage.setItem('@SimuladorCDB:user', JSON.stringify(user));

    return user;
  }, []);

  const storeSimulation = useCallback(
    async (simulation: ISimulations) => {
      const simulationRequest = {
        ...simulation,
        userId: userState.id,
      } as IStoreSimulation;

      await api.post<IStoreSimulation>(`simulations`, simulationRequest);

      const user = readSimulations();

      return user;
    },
    [readSimulations, userState.id],
  );

  return (
    <UserContext.Provider
      value={{
        userState,
        storeUser,
        readSimulations,
        storeSimulation,
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
