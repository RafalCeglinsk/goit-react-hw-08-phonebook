import { Outlet } from 'react-router-dom';

import { Button } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const AuthenticatedNav = () => {
  return (
    <>
      <Button
        href="contactlist"
        variant="contained"
        startIcon={<MenuBookIcon />}
      >
        Contact List
      </Button>
    </>
  );
};
const UnuthenticatedNav = () => (
  <>
    <Button href="/register" variant="contained" startIcon={<VpnKeyIcon />}>
      Register
    </Button>
    <Button href="/login" variant="contained" startIcon={<LoginIcon />}>
      Login
    </Button>
  </>
);
export default function Layout() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav className="NavContainer">
        {isLoggedIn && <UserMenu />}
        <Button href="/" variant="contained" startIcon={<HouseIcon />}>
          Home
        </Button>
        {isLoggedIn ? <AuthenticatedNav /> : <UnuthenticatedNav />}
      </nav>
      <Outlet />
    </div>
  );
}
