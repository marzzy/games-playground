// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { Router } from 'react-router-dom';
import TicTacToe from './TicTacToe';

function renderContainer() {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <TicTacToe />
    </Router>,
  );
}

beforeEach(renderContainer);

function simulateWinSenario() {
  // simulate this:
  // X | X | X
  // N | O | O
  // N | N | N
  fireEvent.click(screen.queryAllByTestId('gamesButton')[0]); // X
  fireEvent.click(screen.queryAllByTestId('gamesButton')[4]); // O
  fireEvent.click(screen.queryAllByTestId('gamesButton')[1]); // X
  fireEvent.click(screen.queryAllByTestId('gamesButton')[5]); // O
  fireEvent.click(screen.queryAllByTestId('gamesButton')[2]); // X
}

test('renders page wrapper', () => {
  const pageWrapperElement = screen.getByTestId('pageWrapper');

  expect(pageWrapperElement).toBeInTheDocument();
});

test('renders 9 buttons in page', () => {
  const buttons = screen.queryAllByTestId('gamesButton');

  expect(buttons).toHaveLength(9);
});

test('change button text by click', () => {
  const buttons = screen.getAllByText('N');
  expect(buttons).toHaveLength(9);

  fireEvent.click(buttons[0]);
  expect(screen.getAllByText('N')).toHaveLength(8);

  expect(screen.getAllByTestId('gamesButton')[0]).toHaveTextContent('X');
});

test('a button can not be changes twice', () => {
  const buttons = screen.queryAllByTestId('gamesButton');

  fireEvent.click(buttons[0]);

  expect(screen.getAllByTestId('gamesButton')[0]).toBeDisabled();
});

test('player01 is always X', () => {
  const buttons = screen.queryAllByTestId('gamesButton');

  fireEvent.click(buttons[0]);

  const changedButton = screen.getAllByText('X');
  expect(changedButton).toHaveLength(1);
});

test('player02 is always O', () => {
  fireEvent.click(screen.queryAllByTestId('gamesButton')[0]);
  fireEvent.click(screen.queryAllByTestId('gamesButton')[1]);

  const changedButton = screen.getAllByText('O');
  expect(changedButton).toHaveLength(1);
});

test('there should be no winner at first', () => {
  expect(screen.queryByText(/is the Winner/i)).toBeNull();
  expect(screen.queryByTestId('restartButton')).toBeNull();
});

test('X gona win', () => {
  simulateWinSenario();
  const winnerStatus = screen.getAllByText('player-1 is the Winner');

  expect(winnerStatus).toHaveLength(1);
});

test('game end after one player wins', () => {
  simulateWinSenario();
  const gameoverStatus = screen.getAllByText('game is over');

  expect(screen.getAllByTestId('gamesButton')[0]).toBeDisabled();
  expect(screen.getAllByTestId('gamesButton')[3]).toBeDisabled();
  expect(gameoverStatus).toHaveLength(1);
  expect(screen.queryAllByTestId('restartButton')).toHaveLength(1);
});

test('reset the game after click in reset button', () => {
  simulateWinSenario();
  fireEvent.click(screen.getByTestId('restartButton'));

  expect(screen.queryByText(/is the Winner/i)).toBeNull();
  expect(screen.queryByTestId('restartButton')).toBeNull();
  expect(screen.getAllByTestId('gamesButton')[0]).toBeEnabled();
  expect(screen.getAllByTestId('gamesButton')[3]).toBeEnabled();
});
