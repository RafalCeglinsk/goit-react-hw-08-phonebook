import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/reducers/contacts/operations';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/reducers/contacts/selectors';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Register from './Login/Register';
import Home from './Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

export const App = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <p>Loading...</p>}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} redirect="/contactlist" />
          <Route
            path="register"
            element={
              <ProtectedRoute element={<Register />} redirect="/contactlist" />
            }
          />
          <Route
            path="ContactList"
            element={
              <PrivateRoute element={<ContactList />} redirect="/login" />
            }
          />
        </Route>
      </Routes>

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
