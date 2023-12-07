import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Contacts } from 'components/Contacts/Contacts';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectGetContacts,
  selectGetFilter,
} from 'redux/reducers/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/reducers/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectGetContacts);
  const filter = useSelector(selectGetFilter);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <div>
      {isLoading && !error && <p>Loading...</p>}
      <ContactForm />
      <h2 className="contactsHeader">Contacts</h2>
      <div className="ContactsContainer">
        <Filter />
      </div>
      <ul className="contactsList">
        {isLoading && !error && <p>Loading...</p>}

        {filteredContacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};
