import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledAppBar = styled(AppBar)``;

export const StyledToolbar = styled(Toolbar)`
  display: grid;
  min-height: 62px;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1vh;
  align-items: center;
  text-align: center;
  padding: 0;
`;

export const StyledLogo = styled.a`
  width: 174px;
  height: 36px;
  display: block;
  position: relative;
  text-indent: -9999px;
  margin: 0;
  align-self: center;
  justify-self: center;
  background-size: 100%;
  background-repeat: no-repeat;
  grid-column: 2;
`;

export const ToolbarOffset = styled.div`
  height: 62px;
`;
