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

export const StyledButtonContainer = styled.div`
  display: grid;
  justify-content: right;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

export const StyledTextContainer = styled.div`
  grid-column: span 2;
  @media only screen and (max-width: 559px) {
    grid-column: span 1;
  }
  h4 {
    color: #de8e85;
  }
`;
