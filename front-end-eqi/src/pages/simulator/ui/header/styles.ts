import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledAppBar = styled(AppBar)``;

export const StyledToolbar = styled(Toolbar)`
  display: grid;
  min-height: 62px;
  grid-template-columns: repeat(2, auto);
  grid-auto-rows: auto;
  grid-gap: 1vh;
  padding: 0;

  p {
    align-self: left;
    margin-left: 10vw;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 1.3em;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
    align-self: right;
    margin-right: 7vw;

    svg {
      color: white;
      width: 30px;
      height: 30px;

      &:hover {
        color: red;
      }
    }
  }
`;

export const ToolbarOffset = styled.div`
  height: 62px;
`;
