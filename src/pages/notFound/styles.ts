import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: any) => ({
  root: {
    background: theme.palette.dark.main.dark30,
    color: theme.palette.dark.main.contrastColor,
    fontSize: '96px',
    fontFamily: 'monospace',
    letterSpacing: '-7px',
  },

  backHome: {
    fontSize: '40px',
    color: theme.palette.dark.complementary.light30,
  },

  notfoundComponent: {
    animation: '$glitch 1s linear infinite',
    '&:after, &:before': {
      content: 'attr(title)',
      position: 'absolute',
      left: 0,
    },
    '&:before': {
      animation: '$glitchTop 1s linear infinite',
      clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)',
    },
    '&:after': {
      animation: '$glitchBotom 1.5s linear infinite',
      clipPath: 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)',
    },
  },

  '@keyframes glitch': {
    '2%,64%': {
      transform: 'translate(2px,0) skew(0deg)',
    },
    '4%,60%': {
      transform: 'translate(-2px,0) skew(0deg)',
    },
    '62%': {
      transform: 'translate(0,0) skew(5deg)',
    },
  },

  '@keyframes glitchTop': {
    '2%,64%': {
      transform: 'translate(2px,-2px)',
    },
    '4%,60%': {
      transform: 'translate(-2px,2px)',
    },
    '62%': {
      transform: 'translate(13px,-1px) skew(-13deg)',
    },
  },

  '@keyframes glitchBotom': {
    '2%,64%': {
      transform: 'translate(-2px,0)',
    },
    '4%,60%': {
      transform: 'translate(-2px,0)',
    },
    '62%': {
      transform: 'translate(-22px,5px) skew(21deg)',
    },
  },
}));

export default useStyles;
