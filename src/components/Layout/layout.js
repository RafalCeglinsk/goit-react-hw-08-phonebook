import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      Layout
      <nav>
        <Link to="/">Home</Link>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
}
