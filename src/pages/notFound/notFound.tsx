import {
  Link,
} from 'react-router-dom';

function NotFound() {
  return (
    <p>
      this is not found page
      back to
      {' '}
      <Link to="/">home</Link>
    </p>
  );
}

export default NotFound;
