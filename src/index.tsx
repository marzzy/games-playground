import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NotFound from 'pages/notFound/notFound';
import Navbar from 'components/Navbar';
import reportWebVitals from './reportWebVitals';
import routes from './components/routes';
import 'index.css';

ReactDOM.render(
  <StrictMode>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route exact={route.name === 'home'} path={route.path}>
            {route.component}
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
