// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import TicTacToe from './TicTacToe';

test('renders learn react link', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <TicTacToe />
    </Router>,
  );
  const pageWrapperElement = container.querySelector('[data-test="pageWrapper"]');

  expect(pageWrapperElement).toBeInTheDocument();
});
