import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { StylesProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { StyledAppBar, StyledToolbar, ToolbarOffset } from './styles';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC = props => {
  const history = useHistory();

  const signOut = useCallback(() => {
    localStorage.removeItem('@SimuladorCDB:user');
    history.push('/');
  }, [history]);

  return (
    <>
      <StylesProvider injectFirst>
        <HideOnScroll {...props}>
          <StyledAppBar position="fixed">
            <Typography variant="h6">
              <StyledToolbar>
                <p>Simulador de Investimentos</p>
                <button type="button" onClick={signOut}>
                  <div>
                    <ExitToAppIcon />
                  </div>
                </button>
              </StyledToolbar>
            </Typography>
          </StyledAppBar>
        </HideOnScroll>
      </StylesProvider>
      <ToolbarOffset />
    </>
  );
};

export default Header;
