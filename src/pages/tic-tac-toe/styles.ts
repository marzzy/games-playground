import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  pageWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,auto)',
    gridTemplateAreas:
    '". gameWrapper ."',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,auto)',
    gridTemplateRows: 'repeat(3, 20vh)',
    gridArea: 'gameWrapper',
  },
});

export default useStyles;
