import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const StyledContainer = styled(Paper)`
  background-color: #ffffff;
  width: fill;
  height: fill;
  position: relative;
`;

export const StyledResultContainer = styled.div`
  /* Grid styles */
  height: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 150px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
