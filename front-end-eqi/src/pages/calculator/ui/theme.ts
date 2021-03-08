import { createMuiTheme } from '@material-ui/core/styles';

const panVelBlue = '#143c8d';
const panVelWhite = '#FFFFFF';

export default createMuiTheme({
  palette: {
    primary: {
      main: `${panVelBlue}`,
    },
    secondary: {
      main: `${panVelWhite}`,
    },
  },
  typography: {
    h6: {
      fontSize: '.94rem',
    },
  },
});
