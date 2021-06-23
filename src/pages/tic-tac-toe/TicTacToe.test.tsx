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
  const button = screen.getAllByTestId('gamesButton')[0];

  // console.log(button);

  fireEvent.click(button);

  // Wait for page to update with query text
  // const items = await screen.findAllByText(/Item #[0-9]: /)
  // expect(items).toHaveLength(10)
});
