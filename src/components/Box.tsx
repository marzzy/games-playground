import { styled } from '@material-ui/styles';
import {
  breakpoints,
  compose,
  borders,
  display,
  flexbox,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
} from '@material-ui/system';

const Box = styled('div')(breakpoints(
  compose(borders, display, flexbox, palette, positions, shadows, sizing, spacing, typography),
));

export default Box;
