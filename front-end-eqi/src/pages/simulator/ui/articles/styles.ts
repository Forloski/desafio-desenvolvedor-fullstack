import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  margin-left: 20vw;
  margin-right: 20vw;
  min-height: 62px;
  grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
  grid-template-rows: auto;
  @media only screen and (max-width: 559px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    margin-left: 1vw;
    margin-right: 1vw;
  }
  justify-content: center;
  grid-gap: 1vh;
  align-items: center;
  text-align: center;
  padding: 0;
  height: 100%;
`;

export const StyledTextContainer = styled.div`
  color: #143c8d;
  text-align: center;
  font-size: 2em;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 1em;
  margin-bottom: 1em;
`;
