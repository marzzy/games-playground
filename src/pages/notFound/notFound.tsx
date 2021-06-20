import Box from 'components/Box';
import {
  Link,
} from 'react-router-dom';
import useStyles from './styles';

function NotFound() {
  const classes = useStyles();

  return (
    <Box display="flex" width="100vw" height="100vh" alignItems="center" flexDirection="column" justifyContent="center" className={classes.root}>
      <div className={classes.notfoundComponent} title="404">404</div>
      <Link className={classes.backHome} to="/">back to the games</Link>
    </Box>
  );
}

export default NotFound;
