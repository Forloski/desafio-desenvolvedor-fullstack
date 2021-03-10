import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import ISimulation from '../../../../../interfaces/ISimulation';

import compoundInterestFormula from '../../../../../utils/compoundInterestFormula';

import { StyledContainer, StyledResultContainer } from './styles';

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
        <StyledResultContainer>
          <div>
            <p>
              <b>Investimento Inicial:</b>{' '}
              {Number(initialDeposit).toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              R$
            </p>
          </div>
          <div>
            <p>
              <b>Depósito Mensal</b>:{' '}
              {Number(monthlyDeposit).toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              R$
            </p>
          </div>
          <div>
            <p>
              <b>Meses Investidos:</b>{' '}
              {Number(investmentTime).toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div>
            <p>
              <b>Investimento Total:</b>{' '}
              {investimento.toLocaleString('pt-br', {
                maximumFractionDigits: 2,
              })}{' '}
              R$
            </p>
          </div>
          <div>
            <p>
              <b>Total na Poupança:</b>{' '}
              {poupanca.toLocaleString('pt-br', { maximumFractionDigits: 2 })}{' '}
              R$
            </p>
          </div>
          <div>
            <p>
              <b>Rendimento na Poupança:</b>{' '}
              {(poupanca - investimento).toLocaleString('pt-br', {
                maximumFractionDigits: 2,
              })}{' '}
              R$
            </p>
          </div>
          <div>
            <p>
              <b>Total no CDB Pós:</b>{' '}
              {cdbPos.toLocaleString('pt-br', { maximumFractionDigits: 2 })} R$
            </p>
          </div>
          <div>
            <p>
              <b>Rendimento no CDB Pós:</b>{' '}
              {(cdbPos - investimento).toLocaleString('pt-br', {
                maximumFractionDigits: 2,
              })}{' '}
              R$
            </p>
          </div>
        </StyledResultContainer>
      </StyledContainer>
    </StylesProvider>
  );
};

export default DefaultArticles;
