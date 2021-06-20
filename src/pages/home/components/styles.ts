import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme : any) => ({
  imgCover: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    background: `radial-gradient(rgba(0, 0, 0,0.75), ${theme.palette.dark.main.normal})`,
    animation: '$blinkingGradient 1.25s',
    animationIterationCount: 2,
    animationTimingFunction: 'ease-in-out',
  },
  '@keyframes blinkingGradient': {
    '0%': {
      background: `radial-gradient(rgba(0, 0, 0,0.75), ${theme.palette.dark.main.normal})`,
    },
    '10%': {
      background: `radial-gradient(rgba(0, 0, 0,0.70), ${theme.palette.dark.main.normal})`,
    },
    '20%': {
      background: `radial-gradient(rgba(0, 0, 0,0.45), ${theme.palette.dark.main.normal})`,
    },
    '30%': {
      background: `radial-gradient(rgba(0, 0, 0,0.25), ${theme.palette.dark.main.normal})`,
    },
    '40%': {
      background: `radial-gradient(rgba(0, 0, 0,0.10), ${theme.palette.dark.main.normal})`,
    },
    '50%': {
      background: `radial-gradient(transparent, ${theme.palette.dark.main.normal})`,
    },
    '60%': {
      background: `radial-gradient(rgba(0, 0, 0,0.10), ${theme.palette.dark.main.normal})`,
    },
    '70%': {
      background: `radial-gradient(rgba(0, 0, 0,0.25), ${theme.palette.dark.main.normal})`,
    },
    '80%': {
      background: `radial-gradient(rgba(0, 0, 0,0.45), ${theme.palette.dark.main.normal})`,
    },
    '90%': {
      background: `radial-gradient(rgba(0, 0, 0,0.70), ${theme.palette.dark.main.normal})`,
    },
    '100%': {
      background: `radial-gradient(rgba(0, 0, 0,0.75), ${theme.palette.dark.main.normal})`,
    },
  },
  textWrapper: {
    width: 0,
    color: theme.palette.common.white,
    animation: '$typing 9s steps(40), $blink 0.5s step-end infinite alternate',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: '3px solid',
    fontSize: '2em',
    textShadow: `10px 10px 15px ${theme.palette.common.black}`,
    animationDelay: '1.5s',
    fontFamily: 'monospace',
  },

  '@keyframes typing': {
    '0%': {
      width: 0,
    },
    '50%': {
      width: '32ch',
    },
    '65%': {
      width: '32ch',
    },
    '100%': {
      width: 0,
    },
  },

  '@keyframes blink': {
    '50%': {
      borderColor: 'transparent',
    },
  },

  button: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    color: theme.palette.common.white,
    fontSize: '1.5em',
    fontFamily: 'monospace',
    cursor: 'pointer',
  },
}));

export default useStyle;
