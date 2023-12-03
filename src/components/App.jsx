import PropTypes from 'prop-types';

import { ContactList } from './ContactList/ContactList';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Register from './Login/Register';
import Home from './Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

export const App = () => {
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
