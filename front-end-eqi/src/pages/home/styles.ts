import styled from 'styled-components';

import { Paper, Grid } from '@material-ui/core';

import porcoImg from '../../assets/porco.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(${porcoImg});
  background-size: cover;
  filter: blur(5px);
`;

export const TextContainer = styled.div``;

export const ImageGrid = styled(Grid)`
  background-image: url(${porcoImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

ImageGrid.defaultProps = {
  item: true,
  xs: false,
  sm: 4,
  md: 7,
};

export const FormGrid = styled(Grid)``;

FormGrid.defaultProps = {
  item: true,
  xs: 12,
  sm: 8,
  md: 5,
};

export const FormPaper = styled(Paper)``;

FormPaper.defaultProps = {
  elevation: 6,
  square: true,
};
