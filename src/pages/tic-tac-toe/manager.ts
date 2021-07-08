import {
  MouseEvent, useRef, useState,
} from 'react';
import {
  initialRefObject, players, helperMap, initialButtonsState,
} from './constants';

function useTicTacToe() {
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

  return {
    data: {
      buttonsState,
      isItfirstPlayerTurn,
      firstPlayerName,
      secoundPlayerName,
      winnerName,
    },
    action: {
      handleClick,
    },
  };
}

export default useTicTacToe;
