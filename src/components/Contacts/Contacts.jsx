import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

import { deleteContact } from 'redux/reducers/contacts/operations';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="contactContainer">
      <li className="contactItem">
        <div className="contactInfo">
          <div className="name">{contact.name}:</div>
          <div className="number">{contact.number}</div>
        </div>
        <Button
          variant="contained"
          className="deleteBtn"
          startIcon={<DeleteIcon />}
          onClick={() => handleDeleteContact(contact.id)}
        >
          Delete
        </Button>
      </li>
    </div>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
