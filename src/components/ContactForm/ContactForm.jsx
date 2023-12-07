import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import { Button } from '@mui/material';

import { selectGetContacts } from 'redux/reducers/contacts/selectors';
import { addContact } from 'redux/reducers/contacts/operations';

export const ContactForm = () => {
  const contacts = useSelector(selectGetContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const id = nanoid();

    if (!name || !number) {
      alert('Name and number cannot be empty.');
      return;
    }

    const newContact = { name, number, id };
    dispatch(addContact(newContact));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="AddForm">
      <label className="AddLabel">
        <h2 className="AddHeader">Name:</h2>
        <input
          type="text"
          name="name"
          value={contacts.name}
          className="AddInput"
          placeholder="Enter contacts name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2 className="AddHeader">Number:</h2>
        <input
          type="tel"
          name="number"
          value={contacts.number}
          className="AddInput"
          placeholder="Enter contacts number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div className="AddContactBtn">
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddToHomeScreenIcon />}
        >
          Add Contact
        </Button>
      </div>
    </form>
  );
};
