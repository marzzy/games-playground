import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NotFound from 'pages/notFound/notFound';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme';
import routes from './routes';
import 'index.css';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route exact={route.name === 'home'} path={route.path} key={route.path}>
              {route.component}
            </Route>
          ))}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
