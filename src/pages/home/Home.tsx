import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from 'components/Box';
import BackgroundImage from 'assets/main-bg.png';
import Loading from './components/loading';

const useStyles = makeStyles((theme: any) => ({
  wrapper: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: theme.palette.dark.main.dark30,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    '& section': {
      position: 'relative',
      color: theme.palette.dark.main.contrastColor,
      fontFamily: 'monospace',
    },
  },
  imgCover: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    background: `radial-gradient(rgba(0, 0, 0,0.75), ${theme.palette.dark.main.normal})`,
  },
}));

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} overflow="hidden">
      {isLoaded ? (
        <>
          <div className={classes.imgCover} />
          <section>
            <h1>
              It&apos;s game time
            </h1>
            <ul>
              <li>games01</li>
              <li>games02</li>
              <li>games03</li>
              <li>games04</li>
            </ul>
          </section>
        </>
      ) : <Loading setIsLoaded={setIsLoaded} />}
    </Box>
  );
}

export default Home;
