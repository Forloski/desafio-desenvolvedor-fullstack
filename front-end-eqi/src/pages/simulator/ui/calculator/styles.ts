import styled from 'styled-components';
import heroModelImg from '../../../../assets/porco.jpg';

export const StyledContainer = styled.div`
  /* Grid styles */
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 150px;
`;

export const StyledHeroModel = styled.img`
  grid-column: 1;

  width: 100%;
  height: auto;
  justify-self: center;
  @media only screen and (max-width: 1030px) {
    width: auto;
    height: 100%;
  }
  @media only screen and (max-width: 559px) {
    width: 100%;
    height: auto;
  }
`;

StyledHeroModel.defaultProps = {
  src: heroModelImg,
};

export const StyledGridElement = styled.div`
  display: flex;
  flex-direction: column;
  width: fill;
  height: 100%;
  background-color: transparent;
  justify-self: center;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: center;
`;

export const StyledResultContainer = styled.div`
  /* Grid styles */
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 150px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
