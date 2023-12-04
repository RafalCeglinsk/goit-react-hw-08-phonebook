import PropTypes from 'prop-types';

import { ContactList } from './ContactList/ContactList';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Login from './Login/login';
import Register from './Login/register';
import Home from './Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/reducers/auth/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={
              <ProtectedRoute element={<Login />} redirect="/contactlist" />
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute element={<Register />} redirect="/contactlist" />
            }
          />
          <Route
            path="contactList"
            element={
              <PrivateRoute element={<ContactList />} redirect="/login" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
