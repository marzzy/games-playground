// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import {
  render, screen, fireEvent, getByText,
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
});

test('winner option on row(X)', () => {
  // simulate this:
  // X | X | X
  // N | O | O
  // N | N | N
  fireEvent.click(screen.queryAllByTestId('gamesButton')[0]); // X
  fireEvent.click(screen.queryAllByTestId('gamesButton')[4]); // O
  fireEvent.click(screen.queryAllByTestId('gamesButton')[1]); // X
  fireEvent.click(screen.queryAllByTestId('gamesButton')[5]); // O
  fireEvent.click(screen.queryAllByTestId('gamesButton')[2]); // X

  const winnerStatus = screen.getAllByText('player-1 is the Winner');
  expect(winnerStatus).toHaveLength(1);
});

// TODO: check whats wrong with this test
// test('winner option on row(O)', () => {
//   // simulate this:
//   // 0-X | 1-X | 2-N
//   // 3-O | 4-O | 5-O
//   // 6-X | 7-N | 8-N
//   fireEvent.click(screen.queryAllByTestId('gamesButton')[0]); // X
//   fireEvent.click(screen.queryAllByTestId('gamesButton')[4]); // O
//   fireEvent.click(screen.queryAllByTestId('gamesButton')[1]); // X
//   fireEvent.click(screen.queryAllByTestId('gamesButton')[5]); // O
//   fireEvent.click(screen.queryAllByTestId('gamesButton')[6]); // X
//   fireEvent.click(screen.queryAllByTestId('gamesButton')[3]); // O

//   const winnerStatus = screen.getAllByText('player-2 is the Winner');
//   expect(winnerStatus).toHaveLength(1);
// });
