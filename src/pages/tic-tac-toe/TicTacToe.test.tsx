// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
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
  let buttons = screen.getAllByText('N');
  expect(buttons).toHaveLength(9);

  fireEvent.click(buttons[0]);
  buttons = screen.getAllByText('N');
  expect(buttons).toHaveLength(8);
  const changedButton = screen.getAllByText(/X|O$/i);
  expect(changedButton).toHaveLength(1);
});

test('a button can not be changes twice', () => {
  const buttons = screen.queryAllByTestId('gamesButton');

  fireEvent.click(buttons[0]);

  const changedButton = screen.getByText(/X|O$/i);
  expect(changedButton).toBeDisabled();
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
