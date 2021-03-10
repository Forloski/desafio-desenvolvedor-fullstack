import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ImageGrid, FormGrid } from './styles';

import { useUser } from '../../hooks/UserContext';

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
    width: '75%',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { storeUser } = useUser();
  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitData = useCallback(
    async (data: any) => {
      await storeUser(data);
      history.push('/simulator');
    },
    [history, storeUser],
  );

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <ImageGrid />
      <FormGrid>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" align="center">
            Simulador de Investimentos
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(handleSubmitData)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              inputRef={register}
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              inputRef={register}
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              inputRef={register}
              name="phone"
              label="Telefone"
              id="phone"
              type="phone"
              autoComplete="phone"
              className={classes.textField}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
          </form>
        </div>
      </FormGrid>
    </Grid>
  );
};

export default Home;
