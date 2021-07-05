import {
  MouseEvent, useRef, useState,
} from 'react';
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

//  b0 | b1 | b2
//  b3 | b4 | b5
//  b6 | b7 | b8
const helperMap: { [key :string]: object } = {
  b0: {
    b1: 'b2', b2: 'b1', b3: 'b6', b6: 'b3', b4: 'b8', b8: 'b4',
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

const initialButtonsState = [
  ['b0', 'N'],
  ['b1', 'N'],
  ['b2', 'N'],
  ['b3', 'N'],
  ['b4', 'N'],
  ['b5', 'N'],
  ['b6', 'N'],
  ['b7', 'N'],
  ['b8', 'N'],
];

const players = [
  { name: 'player-1', value: 'X' },
  { name: 'player-2', value: 'O' },
];

const initialRefObject : { [key in 'X' | 'O']:{ [key :string]: string} } = { X: {}, O: {} };

function TicTacToeGame() {
  const classes = useStyles();
  const playersNeededToWinList = useRef(initialRefObject);
  const [
    { name: firstPlayerName, value: firstPlayerValue },
    { name: secoundPlayerName, value: secoundPlayerValue },
  ] = players;
  const [buttonsState, setButtonState] = useState(initialButtonsState);
  const [isItfirstPlayerTurn, setIsItfirstPlayerTurn] = useState(true);
  const [winnerName, setWinnerName] = useState('');

  function updateButtonStates(targetName:string, targetOrder:number) {
    const newState = [...buttonsState];
    newState[targetOrder] = [
      targetName,
      isItfirstPlayerTurn ? firstPlayerValue : secoundPlayerValue,
    ];

    setButtonState(newState);
  }

  function updateNeededToWinLists(buttonName: string) {
    const { current: { X: playerOneList, O: playerTwoList } } = playersNeededToWinList;
    const currentPlayerList = isItfirstPlayerTurn ? playerOneList : playerTwoList;
    const otherplayerList = isItfirstPlayerTurn ? playerTwoList : playerOneList;

    if (buttonName in currentPlayerList) {
      if (currentPlayerList[buttonName] === 'done') {
        setWinnerName(isItfirstPlayerTurn ? firstPlayerName : secoundPlayerName);
      } else {
        currentPlayerList[currentPlayerList[buttonName]] = 'done';
        delete currentPlayerList[buttonName];
      }
    } else {
      Object.assign(currentPlayerList, helperMap[buttonName]);
    }

    if (buttonName in otherplayerList) {
      delete otherplayerList[otherplayerList[buttonName]];
      delete otherplayerList[buttonName];
    }
  }

  function toggleCurrentPlayer() {
    setIsItfirstPlayerTurn(!isItfirstPlayerTurn);
  }

  function handleClick(event: MouseEvent<HTMLElement>) {
    const buttonName = String(event.currentTarget.getAttribute('data-button-name'));
    const buttonOrder = Number(event.currentTarget.getAttribute('data-button-order'));

    updateButtonStates(buttonName, buttonOrder);
    updateNeededToWinLists(buttonName);
    if (!winnerName) {
      toggleCurrentPlayer();
    }
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
          {winnerName && (
            <h1>
              {winnerName}
              {' '}
              is the Winner
            </h1>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}

export default TicTacToeGame;
