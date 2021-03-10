import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import porcoImg from '../../assets/porco.jpg';

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
