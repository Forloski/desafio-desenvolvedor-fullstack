import React, { useCallback } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import DefaultArticle from './defaultArticle';
import { useUser } from '../../../../hooks/UserContext';
import ISimulation from '../../../../interfaces/ISimulation';

import { StyledContainer, StyledTextContainer } from './styles';

const Articles: React.FC = () => {
  const { userState, readSimulations } = useUser();
  useCallback(() => {
    readSimulations(userState.id);
  });

  return (
    <StylesProvider injectFirst>
      <StyledContainer>
        {userState.simulations
          ? userState.simulations.map(simulation => (
              <DefaultArticle
                initialDeposit={simulation.initialDeposit}
                investmentTime={simulation.investmentTime}
                monthlyDeposit={simulation.monthlyDeposit}
              />
            ))
          : null}
      </StyledContainer>
    </StylesProvider>
  );
};

export default Articles;
