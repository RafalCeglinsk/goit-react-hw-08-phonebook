import PropTypes from 'prop-types';

import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, redirect }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirect} /> : Component;
}

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  redirect: PropTypes.string.isRequired,
};
