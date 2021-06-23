import { MouseEvent, useState } from 'react';
import PageTemplate from 'components/template';
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

// type tButtonState = [string, number, number][];
// [buttonStatus in 'N' | 'X' | 'O', buttonXPos in 0 | 1 | 2, buttonYPos in 0| 1|2][]

const buttonsPosHashMap = {
  button01: [0, 0],
  button02: [1, 0],
  button03: [2, 0],
  button04: [0, 1],
  button05: [1, 1],
  button06: [2, 1],
  button07: [0, 2],
  button08: [1, 2],
  button09: [2, 2],
};

const initialButtonsState = [
  ['button01', 'N'],
  ['button02', 'N'],
  ['button03', 'N'],
  ['button04', 'N'],
  ['button05', 'N'],
  ['button06', 'N'],
  ['button07', 'N'],
  ['button08', 'N'],
  ['button09', 'N'],
];

const players = { player01: 'player 01', player02: 'player 02' };

function TicTacToeGame() {
  const classes = useStyles();
  const [buttonsState, setButtonState] = useState(initialButtonsState);
  const [currentPlayer, setCurrentPlayer] = useState(players.player01);

  function updateButtonStates(targetName:string, targetOrder:number) {
    const newState = [...buttonsState];
    newState[targetOrder] = [targetName, 'O'];

    setButtonState(newState);
  }

  function toggleCurrentPlayer() {
    if (currentPlayer === players.player01) {
      setCurrentPlayer(players.player02);
    } else {
      setCurrentPlayer(players.player01);
    }
  }

  function handleClick(event: MouseEvent<HTMLElement>) {
    const buttonName = String(event.currentTarget.getAttribute('data-button-name'));
    const buttonOrder = Number(event.currentTarget.getAttribute('data-button-order'));
    updateButtonStates(buttonName, buttonOrder);
    toggleCurrentPlayer();
  }

  return (
    <PageTemplate>
      <div className={classes.pageWrapper} data-test="pageWrapper">
        <div className={classes.wrapper} data-test="gameWrapper">
          {buttonsState.map((buttonData, index) => {
            const [name, status] = buttonData;

            return (
              <button
                type="button"
                key={`${name}`}
                data-button-name={name}
                data-button-order={index}
                data-test="gamesButton"
                onClick={handleClick}
              >
                {status}
              </button>
            );
          })}
        </div>
        <div>
          <div data-test="player-info">
            current player :
            {' '}
            {currentPlayer}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default TicTacToeGame;
