import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  StyledContainer,
  StyledGridElement,
  StyledResultContainer,
} from './styles';
import { useUser } from '../../../../hooks/UserContext';
import compoundInterestFormula from '../../../../utils/compoundInterestFormula';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '25vh',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '75%',
  },
  textField: {
    width: '100%',
  },
}));

const Hero: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const classes = useStyles();
  const { storeSimulation } = useUser();

  const [poupanca, setPoupanca] = useState(0);
  const [cdbPos, setCdbPos] = useState(0);
  const [investimento, setInvestimento] = useState(0);

  const watchInvestmentTime = watch('investmentTime', 1);
  const watchInitialDeposit = watch('initialDeposit', 1);
  const watchMonthlyDeposit = watch('monthlyDeposit', 1);

  useEffect(() => {
    setPoupanca(
      compoundInterestFormula(
        watchInitialDeposit,
        watchMonthlyDeposit,
        '0.0012',
        watchInvestmentTime,
      ),
    );
  }, [watchInitialDeposit, watchMonthlyDeposit, watchInvestmentTime]);

  useEffect(() => {
    setInvestimento(
      Number(watchInitialDeposit) +
        Number(watchMonthlyDeposit) * Number(watchInvestmentTime),
    );
  }, [watchInitialDeposit, watchMonthlyDeposit, watchInvestmentTime]);

  useEffect(() => {
    setCdbPos(
      compoundInterestFormula(
        watchInitialDeposit,
        watchMonthlyDeposit,
        '0.00158',
        watchInvestmentTime,
      ),
    );
  }, [watchInitialDeposit, watchMonthlyDeposit, watchInvestmentTime]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitData = useCallback(
    (data: any) => {
      storeSimulation(data);
    },
    [storeSimulation],
  );

  return (
    <StyledContainer>
      <StyledGridElement>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleSubmitData)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            inputRef={register}
            id="initialDeposit"
            label="Depósito Inicial"
            name="initialDeposit"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">R$</InputAdornment>,
            }}
            autoFocus
            className={classes.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            inputRef={register}
            id="monthlyDeposit"
            label="Depósito mensal"
            name="monthlyDeposit"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">R$</InputAdornment>,
            }}
            autoFocus
            className={classes.textField}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            inputRef={register}
            name="investmentTime"
            label="Tempo de investimento"
            id="investmentTime"
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">meses</InputAdornment>
              ),
            }}
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
        </form>
      </StyledGridElement>
      <StyledGridElement>
        <StyledResultContainer>
          <div>
            <p>
              <b>Investimento:</b>{' '}
              {investimento.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div>
            <p>
              <b>Total na Poupança:</b>{' '}
              {poupanca.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p>
              <b>Rendimento na Poupança:</b>{' '}
              {(poupanca - investimento).toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div>
            <p>
              <b>Total no CDB Pós:</b>{' '}
              {cdbPos.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p>
              <b>Rendimento no CDB Pós:</b>{' '}
              {(cdbPos - investimento).toLocaleString('pt-br', {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </StyledResultContainer>
      </StyledGridElement>
    </StyledContainer>
  );
};

export default Hero;
