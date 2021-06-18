import { makeStyles, styled } from '@material-ui/styles';
import Box from 'components/Box';

const useStyles = makeStyles((theme: any) => ({
  root: (props: any) => ({
    color: theme.palette.light.error.normal,
    borderColor: props.color,
    border: '1px solid',
    '& h1': {
      margin: 0,
    },
  }),
}));

const StyledComponent = styled('div')({
  background: 'lightblue',
});

function Examples() {
  const myprops = { color: 'blue' };
  const classes = useStyles(myprops);

  return (
    <Box className={classes.root} bgcolor="dark.complementary.normal">
      <h1>
        use System component + propAtrr + makeStyle
      </h1>

      <StyledComponent>
        styled component example
      </StyledComponent>
    </Box>
  );
}

export default Examples;
