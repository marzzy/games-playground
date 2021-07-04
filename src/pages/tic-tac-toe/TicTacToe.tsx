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

//  00 | 10 | 20
//  01 | 11 | 21
//  02 | 12 | 22

//  b0 | b1 | b2
//  b3 | b4 | b5
//  b6 | b7 | b8

// a+b+c = 33 || 0x || 1x || 2x || x0 || x1 || x2

const helperMap = {
  b0: {
    b1: 'b2', b3: 'b6', b4: 'b8', b2: 'b1', b6: 'b3', b8: 'b4',
  },
  b1: {
    b2: 'b0', b0: 'b2', b7: 'b4', b4: 'b7',
  },
  b2: {
    b1: 'b0', b0: 'b1', b5: 'b8', b8: 'b5', b4: 'b6', b6: 'b4',
  },
  b3: {
    b4: 'b5', b5: 'b4', b0: 'b6', b6: 'b0',
  },
  b4: {
    b6: 'b2', b2: 'b6', b0: 'b8', b8: 'b0', b5: 'b3', b3: 'b5', b1: 'b7', b7: 'b1',
  },
  b5: {
    b4: 'b3', b3: 'b4', b2: 'b8', b8: 'b2',
  },
  b6: {
    b4: 'b2', b2: 'b4', b7: 'b8', b8: 'b7', b0: 'b3', b3: 'b0',
  },
  b7: {
    b4: 'b1', b1: 'b4', b6: 'b8', b8: 'b6',
  },
  b8: {
    b5: 'b2', b2: 'b5', b7: 'b6', b6: 'b7', b0: 'b4', b4: 'b0',
  },
};

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

const players = [
  { name: 'player 01', value: 'X' },
  { name: 'player 02', value: 'O' },
];

function TicTacToeGame() {
  const classes = useStyles();
  const [
    { name: firstPlayerName, value: firstPlayerValue },
    { name: secoundPlayerName, value: secoundPlayerValue },
  ] = players;
  const [buttonsState, setButtonState] = useState(initialButtonsState);
  const [isItfirstPlayerTurn, setIsItfirstPlayerTurn] = useState(true);

  function updateButtonStates(targetName:string, targetOrder:number) {
    const newState = [...buttonsState];
    newState[targetOrder] = [
      targetName,
      isItfirstPlayerTurn ? firstPlayerValue : secoundPlayerValue,
    ];

    setButtonState(newState);
  }

  function toggleCurrentPlayer() {
    setIsItfirstPlayerTurn(!isItfirstPlayerTurn);
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
                disabled={status !== 'N'}
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
            {isItfirstPlayerTurn ? firstPlayerName : secoundPlayerName}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default TicTacToeGame;
