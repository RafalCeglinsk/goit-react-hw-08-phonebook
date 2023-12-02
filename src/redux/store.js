import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './reducers/contacts/contactSlice';
import { filterReducer } from './reducers/contacts/filterSlice';
import { authReducer } from './reducers/auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
