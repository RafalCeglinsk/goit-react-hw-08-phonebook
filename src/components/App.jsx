import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/reducers/contacts/operations';
import { selectContactsError, selectContactsIsLoading } from 'redux/selectors';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Login from './Login/login';
import Register from './Login/register';
import Home from './Home/Home';

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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<ContactList />} />
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
