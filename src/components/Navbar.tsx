import {
  Link,
} from 'react-router-dom';
import routes from './routes';

function Navbar() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
