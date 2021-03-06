// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme';
import Home from './Home';

test('renders learn react link', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <ThemeProvider theme={theme}><Home /></ThemeProvider>
    </Router>,
  );
  const pageWrapperElement = container.querySelector('[data-test="home-page-wrapper"]');

  expect(pageWrapperElement).toBeInTheDocument();
});
