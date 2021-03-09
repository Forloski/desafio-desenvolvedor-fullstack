import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import ISimulation from '../../../../../interfaces/ISimulation';

import compoundInterestFormula from '../../../../../utils/compoundInterestFormula';

import { StyledContainer } from './styles';

const DefaultArticles: React.FC<ISimulation> = ({
  investmentTime,
  initialDeposit,
  monthlyDeposit,
}: ISimulation) => {
  const investimento =
    Number(initialDeposit) + Number(monthlyDeposit) * Number(investmentTime);

  const poupanca = compoundInterestFormula(
    initialDeposit,
    monthlyDeposit,
    '0.0012',
    investmentTime,
  );

  const cdbPos = compoundInterestFormula(
    initialDeposit,
    monthlyDeposit,
    '0.00158',
    investmentTime,
  );

  return (
    <StylesProvider injectFirst>
      <StyledContainer>
        <div>
          <p>
            Investimento:{' '}
            {investimento.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div>
          <p>
            Total na Poupança:{' '}
            {poupanca.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div>
          <p>
            Rendimento na Poupança:{' '}
            {(poupanca - investimento).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div>
          <p>
            Total no CDB Pós:{' '}
            {cdbPos.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div>
          <p>
            Rendimento no CDB Pós:{' '}
            {(cdbPos - investimento).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </StyledContainer>
    </StylesProvider>
  );
};

export default DefaultArticles;
