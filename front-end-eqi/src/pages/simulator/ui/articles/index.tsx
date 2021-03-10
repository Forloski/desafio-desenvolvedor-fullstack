import React, { useEffect } from 'react';
import DefaultArticle from './defaultArticle';
import { useUser } from '../../../../hooks/UserContext';

import { StyledContainer, StyledTextContainer } from './styles';

const Articles: React.FC = () => {
  const { userState, readSimulations } = useUser();

  useEffect(() => {
    readSimulations();
  }, []);

  return (
    <>
      <StyledTextContainer>Simulações Anteriores</StyledTextContainer>
      <StyledContainer>
        {userState.simulations
          ? userState.simulations.map(simulation => (
              <DefaultArticle
                key={simulation.id}
                initialDeposit={simulation.initialDeposit}
                investmentTime={simulation.investmentTime}
                monthlyDeposit={simulation.monthlyDeposit}
              />
            ))
          : null}
      </StyledContainer>
    </>
  );
};

export default Articles;
